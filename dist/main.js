#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const distPath = process.argv[2];
const PORT = Number(process.argv[3]) || 80;
const app = express();
app.use(express.static(distPath));
app.get("/", (req, res) => {
    const filePath = path.resolve(distPath, "index.html");
    res.sendFile(filePath);
});
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
