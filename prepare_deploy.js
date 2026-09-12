const fs = require("fs");
const path = require("path");

const root = process.cwd();
const deploy = path.join(root, ".deploy");
const publicDir = path.join(deploy, "public");
fs.rmSync(deploy, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(publicDir, "index.html"));
fs.copyFileSync(path.join(root, "worker.js"), path.join(deploy, "worker.js"));

const wrangler = {
  "$schema": "../node_modules/wrangler/config-schema.json",
  "name": "esg-carbon-energy-intelligence-platform",
  "main": "worker.js",
  "compatibility_date": "2026-09-12",
  "assets": {
    "directory": "./public",
    "binding": "ASSETS",
    "run_worker_first": ["/api/*"]
  }
};
fs.writeFileSync(path.join(deploy, "wrangler.jsonc"), JSON.stringify(wrangler, null, 2), "utf8");

console.log("Prepared .deploy/ for Cloudflare Workers.");
