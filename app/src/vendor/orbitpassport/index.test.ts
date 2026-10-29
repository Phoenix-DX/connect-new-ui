import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { OrbitPassportEmbed } from './index';

/* The vendored loader is never edited (SOURCE.md): its bytes stay those fetched from TST. The second part runs the
   file in jsdom and checks the parts of its postMessage protocol that the block and the fake portal rely on. */
// Vitest runs from app/ (jsdom: import.meta.url is not a file URL)
const FILE = resolve(process.cwd(), 'src/vendor/orbitpassport/OrbitPassportScanC2.PassportScan.js');
const PORTAL = 'http://portal.test';

function runLoader(): OrbitPassportEmbed {
  const text = readFileSync(FILE, 'utf8');
  const source = text.startsWith(String.fromCharCode(0xfeff)) ? text.slice(1) : text;
  // eslint-disable-next-line @typescript-eslint/no-implied-eval -- runs the vendored IIFE as its <script> would
  (new Function(source) as () => void)();
  return (window as unknown as { OrbitPassport: { embed: OrbitPassportEmbed } }).OrbitPassport.embed;
}

function fromPortal(data: unknown, origin = PORTAL): void {
  window.dispatchEvent(new MessageEvent('message', { origin, data }));
}

function setUp() {
  const container = document.createElement('div');
  container.id = 'b1-passportScan';
  document.body.appendChild(container);
  const embed = runLoader();
  current = embed;
  const events = {
    onReady: vi.fn(),
    onSaved: vi.fn(),
    onClose: vi.fn(),
    onAuthExpired: vi.fn(),
    onError: vi.fn(),
    onRequestCamera: vi.fn((): unknown => ({ Image: 'data:image/svg+xml;base64,PHN2Zy8+' })),
  };
  void embed
    .configure({
      loginMemberId: 7202,
      baseUrl: `${PORTAL}/mock#`,
      containerId: container.id,
      tokenType: 'ubt-one',
      idToken: 'fictional-token',
      b2cTenants: 'tenant',
      b2cClientIds: 'client',
      b2cPolicy: 'policy',
      ...events,
    })
    .catch(() => undefined);
  embed.open({ memberId: 7301 });
  const iframe = container.querySelector('iframe');
  if (!iframe?.contentWindow) throw new Error('no iframe');
  const post = vi.spyOn(iframe.contentWindow, 'postMessage').mockImplementation(() => undefined);
  return { embed, events, iframe, post };
}

let current: OrbitPassportEmbed | null = null;

afterEach(() => {
  // each run of the IIFE adds its own listener: remove it, so an older closure posts nothing
  current?.destroy();
  current = null;
  vi.restoreAllMocks();
  document.body.innerHTML = '';
});

describe('vendor/orbitpassport', () => {
  it('is the TST file, byte for byte', () => {
    const bytes = readFileSync(FILE);
    expect(bytes.length).toBe(27095);
    expect(createHash('sha256').update(bytes).digest('hex')).toBe(
      '35adc43ae885178b9665fb7d83c5b4938caa7c6f5b837c4bc1bc3e3d1d706125',
    );
  });

  it('opens <baseUrl>/passport in the container and signs in on webview:ready', () => {
    const { embed, events, iframe, post } = setUp();
    expect(iframe.getAttribute('src')).toBe(`${PORTAL}/mock#/passport`);
    expect(embed.isConfigured()).toBe(true);
    fromPortal({ type: 'webview:ready' }, 'http://other.test');
    expect(events.onReady).not.toHaveBeenCalled();
    fromPortal({ type: 'webview:ready' });
    expect(events.onReady).toHaveBeenCalledTimes(1);
    return vi.waitFor(() => {
      expect(post).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'auth:token',
          token: 'fictional-token',
          tokenType: 'ubt-one',
          memberId: 7301,
          loginMemberId: 7202,
        }),
        PORTAL,
      );
    });
  });

  it('relays the portal events and answers the camera request with the image', async () => {
    const { embed, events, post } = setUp();
    fromPortal({ type: 'webview:ready' });
    fromPortal({ type: 'passport:saved', passportId: 'P-1' });
    fromPortal({ type: 'passport:error', error: 'Scan failed' });
    fromPortal({ type: 'auth:expired' });
    fromPortal({ type: 'webview:close' });
    expect(events.onSaved).toHaveBeenCalledWith('P-1');
    expect(events.onError).toHaveBeenCalledWith('Scan failed');
    expect(events.onAuthExpired).toHaveBeenCalledTimes(1);
    expect(events.onClose).toHaveBeenCalledTimes(1);
    fromPortal({ type: 'passport:requestCamera' });
    await vi.waitFor(() => {
      expect(post).toHaveBeenCalledWith(
        { type: 'camera:image', base64Image: 'PHN2Zy8+', mimeType: 'image/svg+xml' },
        PORTAL,
      );
    });
    expect(embed.back()).toBe(true);
    expect(post).toHaveBeenCalledWith({ type: 'navigation:back' }, PORTAL);
    embed.destroy();
    expect(embed.isConfigured()).toBe(false);
  });

  it('answers ocr:error when the camera gives no image', async () => {
    const { events, post } = setUp();
    events.onRequestCamera.mockReturnValue({ Image: '' });
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    fromPortal({ type: 'webview:ready' });
    fromPortal({ type: 'passport:requestCamera' });
    await vi.waitFor(() => {
      expect(post).toHaveBeenCalledWith(expect.objectContaining({ type: 'ocr:error' }), PORTAL);
    });
  });
});
