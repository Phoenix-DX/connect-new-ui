"""Bring data.vi.json in step with data.en.json after a data change that needs no new translation of the findings.

Usage (from the project root):
  python3 migration/clarify/tools/artifact_vi_sync.py
It copies the matrix and the unclear rows (by key), adds the finding "Status" in Vietnamese, and takes the decisions
from VI_DECISIONS below for the ids whose answer changed (the other decisions keep their translation).
"""
import json, re

EN = 'migration/clarify/artifact/data.en.json'
VI = 'migration/clarify/artifact/data.vi.json'

# Translations of the decisions that changed or were added after the first translation (2026-10-27).
VI_DECISIONS = {
    ('App_Common', 'Q1'): {
        'question': '"Forgot Password?" làm gì trong giai đoạn mock (F2)?',
        'answer': 'Đảo lại 2026-10-27: build Forgot Password đầy đủ như TST (spinner IsResettingPassword, AppManager_Login(True, ConfirmationDialog_ResetPassword), chính sách reset-password của identity provider của bản build, callback IdP_OnResetPassword với toast thành công). Câu trả lời (a) trước đó ngày 2026-10-27 bị thay thế.',
    },
    ('Directory_Updates', 'Q1'): {
        'question': 'Khi Back về Updates_SingleList, anh có chấp nhận scroll offset của view cache shell thay cho anchor của TST (F2)?',
        'answer': 'User 2026-10-27: port đầy đủ việc lưu và khôi phục scroll anchor (CaptureScrollPosition, RememberFocusedScrollAnchor, GetFocusedScrollAnchorOnBack, ScrollFix) như TST. Trước đó: capture ngày 2026-10-27 với write MarkAsRead được cho phép một lần.',
    },
    ('Legacy_OrbitEventsFlow', 'F4'): {
        'question': 'OrbitLanding và AccommodationHost: OnReady trên view restore không có dữ liệu (F4)?',
        'answer': '(a) Giữ quyết định W34 (a) ngày 2026-10-22: trên view restore chưa có dữ liệu, OrbitLanding và AccommodationHost gọi lại (chỉ đọc); TST giữ skeleton (lỗi race). Rows A030 và J008 là differs theo W34.',
    },
    ('App_Policies', 'F2'): {
        'question': 'Query pending-policies: networkMode nào (F2)?',
        'answer': "(a) Giữ networkMode 'always' cho query pending-policies: gọi lúc offline thất bại ngay và hiện thông báo mất kết nối như TST; refetchOnReconnect false. Các query feed và member giữ 'online'.",
    },
}


def vi_status(st):
    if not st:
        return ''
    m = re.search(r'\d{4}-\d{2}-\d{2}', st)
    date = m.group(0) if m else ''
    if st.startswith('fixed'):
        return 'đã sửa ' + date
    if 'withdrawn' in st:
        return 'rút lại sau khi đọc lại TST ' + date
    if st.startswith('no fix'):
        return 'giữ theo quyết định'
    if st.startswith('open'):
        return 'còn mở'
    return st


def main():
    en = json.load(open(EN, encoding='utf-8'))
    vi = json.load(open(VI, encoding='utf-8'))
    vi['generated'] = en['generated']
    vi['matrix'] = en['matrix']
    keep = {(u.get('Flow'), u.get('Row')) for u in en['unclear']}
    vi['unclear'] = [u for u in vi['unclear'] if (u.get('Flow'), u.get('Row')) in keep]
    status = {(f['Flow'], f['Id']): f.get('Status', '') for f in en['findings']}
    for f in vi['findings']:
        f['Status'] = vi_status(status.get((f['Flow'], f['Id']), ''))
        f['StatusEn'] = status.get((f['Flow'], f['Id']), '')
    by_key = {(d['flow'], d['id']): d for d in vi['decisions']}
    out = []
    for d in en['decisions']:
        k = (d['flow'], d['id'])
        row = dict(by_key.get(k, d))
        row.update({'by': d['by'], 'date': d['date']})
        if k in VI_DECISIONS:
            row.update(VI_DECISIONS[k])
        out.append(row)
    vi['decisions'] = out
    json.dump(vi, open(VI, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
    n = sum(1 for f in vi['findings'] if f['Status'].startswith('đã sửa'))
    print(f'vi: matrix {len(vi["matrix"])}, unclear {len(vi["unclear"])}, findings {len(vi["findings"])} (đã sửa {n}), decisions {len(vi["decisions"])}')


if __name__ == '__main__':
    main()
