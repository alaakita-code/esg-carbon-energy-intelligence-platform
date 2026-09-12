# GitHub + Cloudflare Workers 部署

## 本機
```bash
npm install
npm run check
npm run dev
```

## GitHub
建議 Repository：`alaakita-code/esg-carbon-energy-intelligence-platform`
建議 RC Tag：`v0.7.0-rc.1`

## Cloudflare Workers
此專案採 Workers Static Assets：`public/` 為 Web UI、`src/index.js` 為 API。

```bash
npx wrangler login
npx wrangler deploy
```

## D1 下一階段
```bash
npx wrangler d1 create esg-carbon-energy-db
npx wrangler d1 migrations apply esg-carbon-energy-db --local
npx wrangler d1 migrations apply esg-carbon-energy-db --remote
```

建立 D1 後再於 `wrangler.jsonc` 加入 `DB` binding。RC1 未建立 D1 也能正常部署，資料仍使用 localStorage。
