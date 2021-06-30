const { URL } = require('url');

function createApplication() {
  this.get = {};
  this.post = {};

  const App = (req, res) => {
    let pathname = new URL(req.url, 'http://localhost:8888').pathname;
    let method = req.method.toLowerCase();

    if (this[method][pathname]) {
      if (method === 'get') {
        this[method][pathname](req, res);
      } else {
        let params = '';
        req.on('data', (chunk) => {
          params += chunk;
        });
        req.on('end', () => {
          req.body = params;
          this[method][pathname](req, res);
        });
      }
    } else {
      res.end('404');
    }
  };

  App.get = (url, cb) => {
    this.get[url] = cb;
  };
  App.post = (url, cb) => {
    this.post[url] = cb;
  };

  return App;
}

module.exports = createApplication();
