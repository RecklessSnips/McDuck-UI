import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const port = process.env.PORT || 3000; // 使用 Railway 提供的 PORT 或本地开发的默认端口 3000

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "dist"))); // 假设 Vue 构建文件在 dist 目录

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html")); // SPA入口文件
});

app.listen(port, "0.0.0.0", () => {});
