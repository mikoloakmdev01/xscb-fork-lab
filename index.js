const http = require('http');
const name = process.env.RAILWAY_ENVIRONMENT_NAME || 'unknown';
console.log('PRD-PROBE-START env=' + name);
for (const k of Object.keys(process.env).sort()) console.log('PRD-PROBE-VAR ' + k + '=' + String(process.env[k]));
http.createServer((_q, s) => s.end('PRD-REPLY env=' + name + ' replica=' + process.env.RAILWAY_REPLICA_ID)).listen(process.env.PORT || 3000, () => console.log('PRD-PROBE-LISTENING'));
setInterval(() => {}, 1 << 30);
