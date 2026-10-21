/* FileTransferPlugin.FileTransfer.HandleDownload (block without markup; compiled code in
   migration/screens/MilestoneDetail/analysis/sources/raw/FileTransferPlugin.FileTransfer.HandleDownload.mvc.js = HD,
   FileTransferPlugin.controller.js = FT). The block relays the FileTransfer plugin's download callbacks to its events
   OnDownloadProgress / OnDownloadComplete / OnDownloadError. Web port: a hook the owning block calls; the owner keeps the
   block's <OSBlock name="FileTransfer.HandleDownload"> for the markup. */
import { useEffect, useRef } from 'react';
import { log } from '../../../lib/log';

/** FileDownloadResult (FileTransferPlugin.model.js:198-240; JSON names isFile, isDirectory, name, fullPath,
    nativeURL). */
export interface FileDownloadResult {
  IsFile: boolean;
  IsDirectory: boolean;
  Name: string;
  FullPath: string;
  NativeURL: string;
}

/** FileTransferError (FileTransferPlugin.model.js:94-150; JSON names code, message, source, target, http_status, body,
    exception, headers). The owners compare Message ("Document not found"). */
export interface FileTransferError {
  Code: string;
  Message: string;
  Source: string;
  Target: string;
  HttpStatus: number;
  Body: string;
  Exception: string;
  Headers: string;
}

type Json = Record<string, unknown>;
const text = (v: unknown): string => (typeof v === 'string' ? v : '');

const toFileDownloadResult = (j: Json): FileDownloadResult => ({
  IsFile: j.isFile === true,
  IsDirectory: j.isDirectory === true,
  Name: text(j.name),
  FullPath: text(j.fullPath),
  NativeURL: text(j.nativeURL),
});

const toFileTransferError = (j: Json): FileTransferError => ({
  Code: text(j.code),
  Message: text(j.message),
  Source: text(j.source),
  Target: text(j.target),
  HttpStatus: typeof j.http_status === 'number' ? j.http_status : 0,
  Body: text(j.body),
  Exception: text(j.exception),
  Headers: text(j.headers),
});

export interface HandleDownloadEvents {
  onDownloadProgress?: (progress: unknown) => void;
  onDownloadComplete?: (result: FileDownloadResult) => void;
  onDownloadError?: (error: FileTransferError) => void;
}

type PluginWindow = Window & {
  cordova?: unknown;
  OSFileTransferPluginWrapper?: { Instance?: unknown };
};

/** DEPRECATED_CheckFileTransferPlugin (FT): with Cordova (IsCordovaDefined) the native plugin check; without it the PWA
    check `typeof OSFileTransferPluginWrapper !== "undefined" && typeof OSFileTransferPluginWrapper.Instance !==
    "undefined"` (CheckPWA JS, FT:270-280): IsAvailable and IsPWA both True when it holds. */
export function dEPRECATED_CheckFileTransferPlugin(): { IsAvailable: boolean; IsPWA: boolean } {
  const w = window as PluginWindow;
  if (w.cordova !== undefined) return { IsAvailable: false, IsPWA: false };
  const isPWA = w.OSFileTransferPluginWrapper !== undefined && w.OSFileTransferPluginWrapper.Instance !== undefined;
  return { IsAvailable: isPWA, IsPWA: isPWA };
}

/** JSON Deserialize of the callback payload (HD DownloadProgress / DownloadComplete / DownloadError :230-500); a
    payload that does not parse goes to the AllExceptions handler: ConsoleLog. */
function relay<T>(json: string, map: (j: Json) => T, event: ((value: T) => void) | undefined, name: string): void {
  try {
    event?.(map(JSON.parse(json) as Json));
  } catch (e) {
    log.error(`HandleDownload ${name}`, e);
  }
}

/**
 * HandleDownload OnReady / OnDestroy (HD :297-380, :516-597). OnReady: DEPRECATED_CheckFileTransferPlugin; available
 * and PWA → RegisterWebCallbacks JS (HD :759-778: window listeners `downloadprogress`, `downloadcomplete`,
 * `fileTransferError` handing JSON.stringify(e.detail.progress | result | error) to DownloadProgress / DownloadComplete
 * / DownloadError, which deserialize it and trigger the event); available, not PWA → the Cordova PluginManager scope
 * (RegisterCallBacks, HD :721-758; not ported, the browser app has no Cordova); not available → ConsoleLog. OnDestroy
 * removes the web listeners. The browser app loads no OSFileTransferPluginWrapper, so no callback registers and the
 * events never fire there (OpenInApp_TryOpenFileInApp never downloads on the web).
 */
export function useHandleDownload(events: HandleDownloadEvents): void {
  const latest = useRef(events);
  useEffect(() => {
    latest.current = events;
  });
  useEffect(() => {
    const check = dEPRECATED_CheckFileTransferPlugin();
    if (!check.IsAvailable) {
      log.debug('HandleDownload: FileTransfer plugin not available');
      return;
    }
    if (!check.IsPWA) return;
    const detail = (e: Event) => (e as CustomEvent<Record<string, unknown>>).detail;
    const progress = (e: Event) => {
      relay(JSON.stringify(detail(e).progress), (j) => j, latest.current.onDownloadProgress, 'DownloadProgress');
    };
    const complete = (e: Event) => {
      relay(
        JSON.stringify(detail(e).result),
        toFileDownloadResult,
        latest.current.onDownloadComplete,
        'DownloadComplete',
      );
    };
    const error = (e: Event) => {
      relay(JSON.stringify(detail(e).error), toFileTransferError, latest.current.onDownloadError, 'DownloadError');
    };
    window.addEventListener('downloadprogress', progress);
    window.addEventListener('downloadcomplete', complete);
    window.addEventListener('fileTransferError', error);
    return () => {
      window.removeEventListener('downloadprogress', progress);
      window.removeEventListener('downloadcomplete', complete);
      window.removeEventListener('fileTransferError', error);
    };
  }, []);
}
