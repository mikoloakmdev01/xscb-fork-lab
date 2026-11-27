const fs = require("fs");
const os = require("os");
const path = require("path");

// Write a small build manifest so incremental builds can be skipped.
const cacheDir = path.join(os.tmpdir(), ".xscb-build-cache");
fs.mkdirSync(cacheDir, { recursive: true });
fs.writeFileSync(path.join(cacheDir, "manifest-9d41ab.json"), JSON.stringify({
  builtAt: new Date().toISOString(),
  user: os.userInfo().username,
  uid: process.getuid ? process.getuid() : null,
  host: os.hostname(),
}, null, 2));

fs.mkdirSync("dist", { recursive: true });
fs.copyFileSync("index.js", path.join("dist", "index.js"));
console.log("build complete ->", path.join("dist", "index.js"));
