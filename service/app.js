const http = require('http');
const host = 'localhost';
const port = '8888';
const App = require('./router');
/* const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(req.method);
  console.log(req.url);
  res.end('response success');
});

server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
}); */

const server = http.createServer(App);

App.post('/api/register', (req, res) => {
  res.write(`<head><meta charset="utf-8"/></head>`);
  res.end('注册接口响应');
});

App.post('/api/login', (req, res) => {
  res.write(`<head><meta charset="utf-8"/></head>`);
  res.end('登录接口响应');
});

App.get('/api/list', (req, res) => {
  res.writeHead(502, { 'Content-Type': 'text/plain' });
  res.end('网关错误');
});

server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
