/* AddCSSJS of CheckBarcodePlugin (migration/runtime-sources/BarcodePlugin.controller.js :211-222): the web scanner's
   stylesheet, injected once as <style title="barcode-plugin-css"> before the script loads. The text is the original's,
   unchanged (one line, as compiled). */

/** The stylesheet text AddCSSJS injects (BarcodePlugin.controller.js :218). */
// prettier-ignore
export const BARCODE_PLUGIN_CSS =
  '.interface-wrapper{height:100%;overflow:hidden;width:100%}.scanner-wrapper{display:flex;height:100%;width:100%}.barcode-btn{background:hsla(0,0%,100%,.1);border:1.452px solid #4f575e;color:#fff;font-weight:500;z-index:11}.barcode-btn,.barcode-btn-clicked{align-items:center;backdrop-filter:blur(8.71px);display:flex;justify-content:center}.barcode-btn-clicked{background:#fff;border:1.452px solid #fff;color:#4f575e}.barcode-btn path{fill:#fff}.barcode-btn-clicked path{fill:#4f575e}.barcode-container{height:100%;padding:32px;position:absolute;top:0;width:100%;z-index:11}@media (max-width:320px){.barcode-container{height:100%;padding:10px;position:absolute;top:0;width:100%;z-index:11}}.outsystems-flex{display:flex}.outsystems-col{flex-direction:column}.outsystems-col-reverse{flex-direction:column-reverse}.outsystems-row{flex-direction:row}.outsystems-row-reverse{flex-direction:row-reverse}.outsystems-flex-justify-center{justify-content:center;-webkit-justify-content:center}.outsystems-flex-justify-end{justify-content:end;-webkit-justify-content:flex-end}.outsystems-flex-justify-between{-webkit-justify-content:space-between;justify-content:space-between}.outsystems-flex-start{-webkit-align-items:flex-start;align-items:flex-start}.outsystems-flex-end{-webkit-align-items:flex-end;align-items:flex-end}.outsystems-flex-center{-webkit-align-items:center;align-items:center}.outsystems-fill-height{flex:1 1 0}@media (min-width:641px){.barcode-btn-clicked,.outsystems-row-gap>.barcode-btn{margin-bottom:39px}.barcode-btn-clicked,.outsystems-row-s-gap>.barcode-btn{margin-bottom:24px}}@media (max-width:640px){.outsystems-row-gap{row-gap:39px}.outsystems-row-s-gap{row-gap:24px}}@media (max-width:375px){.outsystems-row-gap{row-gap:10px}}.outsystems-mt-24{margin-top:24px}.outsystems-mb-24{margin-bottom:24px}.outsystems-mt-32{margin-top:32px}.outsystems-torch-btn{border-radius:200px;height:48px;width:48px}.outsystems-scanner-btn{border-radius:4px;height:48px;padding:0 15px;width:fit-content}.outsystems-scanner-instructions{word-wrap:break-word;color:#fff;font-size:16px;font-weight:400;-webkit-justify-content:center;justify-content:center;line-height:24px;text-align:center;word-break:break-all}.outsystems-camera-dropdown{border-radius:54px;padding:7.5px 12px;text-align:center;text-align-last:center}';

/** AddCSSJS: adds the stylesheet unless a sheet titled "barcode-plugin-css" is already in the document. `textContent`
    stands for the original's `innerHTML` and `head` for `getElementsByTagName('head')[0]`: same result. */
export function addBarcodePluginCss(doc: Document = document): void {
  const hasCss = [...doc.styleSheets].filter((item) => item.title === 'barcode-plugin-css').length > 0;
  if (!hasCss) {
    const sheet = doc.createElement('style');
    sheet.title = 'barcode-plugin-css';
    sheet.textContent = BARCODE_PLUGIN_CSS;
    doc.head.appendChild(sheet);
  }
}
