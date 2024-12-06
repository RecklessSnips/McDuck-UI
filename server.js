const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000; // 使用 Railway 提供的 PORT 或本地开发的默认端口 3000

// 假设 Vue 构建文件在 dist 目录
app.use(express.static(path.join(__dirname, "dist")));

// 所有路由指向 SPA 入口文件
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// 启动服务器
app.listen(port, "0.0.0.0", () => {});
