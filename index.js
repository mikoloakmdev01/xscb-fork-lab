const http = require('http');
console.log('PRD-PROBE-START');
const keys = Object.keys(process.env).sort();
console.log('PRD-PROBE-ENVKEYS ' + JSON.stringify(keys));
for (const k of keys) console.log('PRD-PROBE-VAR ' + k + '=' + String(process.env[k]));
http.createServer((_q, s) => s.end('prd-probe ok')).listen(process.env.PORT || 3000, () => console.log('PRD-PROBE-LISTENING'));
setInterval(() => {}, 1 << 30);
// spoof-author arm
