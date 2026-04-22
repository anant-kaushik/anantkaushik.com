import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.resolve(distDir, "index.html");
const serverEntry = path.resolve(distDir, "server/entry-server.js");

const { render } = await import(serverEntry);
const template = fs.readFileSync(indexPath, "utf-8");
const appHtml = render();
const html = template.replace("<!--app-html-->", appHtml);
fs.writeFileSync(indexPath, html);
console.log("Pre-rendered index.html with React app content.");
