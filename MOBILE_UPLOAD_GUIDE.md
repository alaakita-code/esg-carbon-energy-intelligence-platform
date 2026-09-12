# Android 手機 GitHub 上傳版

這個版本特別為手機瀏覽器準備，所有需要上傳的檔案都放在同一層，避免手機檔案選擇器無法一次選取資料夾。

## 手機上傳
在 GitHub Repository：
1. `Add file` → `Upload files`
2. 一次選取本資料夾內所有檔案。
3. Commit message：`chore: initialize v0.7.0 RC1 mobile upload`
4. Commit 到 `main`

## 為什麼沒有 docs/public/src 資料夾
手機版採「來源平坦化、部署時重建」：
- `index.html` → 部署時自動建立 `.deploy/public/index.html`
- `worker.js` → 部署時自動建立 `.deploy/worker.js`
- `prepare_deploy.js` → 負責重建 Cloudflare 部署結構

因此 GitHub Repository 可先保持單層，Cloudflare 部署時仍會產生正確結構。

## Cloudflare
部署指令：
```bash
npm install
npm run check
npm run deploy
```

`npm run deploy` 會先執行 `prepare_deploy.js`，再用 `.deploy/wrangler.jsonc` 部署。
