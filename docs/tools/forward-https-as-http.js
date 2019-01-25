const net = require("net");
const http = require("http");
const https = require("https");
const medius_http = 10060;
const medius_https = 10061;
const local = "localhost";
const proxy = "warhawk-prod3.svo.online.scea.com";
const regex = /[a-z0-9\.-]{1,}\.online\.sce([ea]|uk|hk|jp)\.com/gi;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const http_proxy = http.createServer((request, response) => {
  response.removeHeader("Transfer-Encoding");
  const socket = request.socket;
  let actualHeaders = {};
  request.headers = {};
  response.sendDate = false;
  _q = request.rawHeaders;
  for (let h, v, s = 0; s < _q.length; s++) {
    h = _q[s]; v = _q[s + 1];
    request.headers[h.toLowerCase()] = v;
    actualHeaders[h] = v; s++;
  } delete _q;
  let _proposed = request.headers["content-length"];
  _proposed = _proposed !== undefined? Number(_proposed): 0;
  let _accepting = _proposed > 0 && _proposed < 286432,
      recieved = _accepting? Buffer.alloc(_proposed): null,
      _d, _bpsn, _bpss, _bpsd = 0, _filled = 0;
  request.on("data", chunk => {
    _d = chunk.length;
    _bpsn = Math.floor(Date.now() / 1E3);
    if (!_accepting || !(_d > 0 && _d < 69208 && _proposed - _d > -1)) {
      _d = 0; request.pause();
    } else {
      recieved.fill(chunk, _filled, _filled + _d, "binary"); _filled += _d;
      if (_proposed != _bpsd && _bpsn == _bpss && _bpsd + _d > 69208) {
        request.pause(); request.resume(); _proposed -= _d; _bpsd += _d;
      } else {
        _bpss = _bpsn; _proposed -= _d; _bpsd = _d;
      }
    }
    if (!_d) http_proxy.resetSocket(413, request, response, socket);
  }).on("error", () => {
    request.pause(); http_proxy.resetSocket(400, request, response, socket);
  }).on("end", () => {
    console.log(`[HTTP]: ${request.method} ${request.url}`);
    let forward = http.request({
      hostname: proxy, port: medius_http,
      method: request.method, path: request.url,
      headers: actualHeaders
    }, (medius) => {
      const data = [];
      medius.on("data", (chunk) => {
        data.push(chunk);
      });
      medius.on("end", () => {
        let content = Buffer.concat(data).toString("binary");
        let headers = medius.headers;
        content = content.replace(regex, local).replace(/https:/gi, "http:");
        if (typeof headers["location"] !== "undefined")
          headers["location"] = headers["location"].replace(regex, local).replace(/https:/gi, "http:");
        headers["content-length"] = content.length;
        response.writeHead(medius.statusCode, headers);
        response.end(content, "binary");
      });
    });
    forward.on("error", function(error) {
      console.log("POST https.request error:", error);
    });
    if (forward.method === "POST")
      forward.write(body);
    forward.end();
  });
}).listen(medius_http).on("timeout", socket => {
  socket.end("\n", () => socket.destroy());
}).on("clientError", (exception, socket) => {
  socket.end("\n", () => socket.destroy());
}).on("checkContinue", (request, response) => {
  http_proxy.resetSocket(400, request, response, null);
}).on("checkExpectation", (request, response) => {
  http_proxy.resetSocket(417, request, response, null);
}).on("connect", (request, socket) => {
  socket.end("\0", () => socket.destroy() && request.destroy());
}).on("connection", () => {}).on("listening", function() {
  console.log(`[net:proxy:http]: tcp:localhost:${medius_http} -> tcp:${proxy}:${medius_http}`);
});
http_proxy.resetSocket = (code, request, response, socket) => {
  if (socket === null) socket = request.socket;
  response.writeHead(code, {"Connection": "close"});
  response.end(() => socket.destroy() && request.destroy());
}
http_proxy.maxHeadersCount = 20;
http_proxy.headersTimeout = 85;
http_proxy.keepAliveTimeout = 3E4;
http_proxy.timeout = 3E3;
const https_proxy = http.createServer((request, response) => {
  response.removeHeader("Transfer-Encoding");
  const socket = request.socket;
  let actualHeaders = {};
  request.headers = {};
  response.sendDate = false;
  _q = request.rawHeaders;
  for (let h, v, s = 0; s < _q.length; s++) {
    h = _q[s]; v = _q[s + 1];
    request.headers[h.toLowerCase()] = v;
    actualHeaders[h] = v; s++;
  } delete _q;
  let _proposed = request.headers["content-length"];
  _proposed = _proposed !== undefined? Number(_proposed): 0;
  let _accepting = _proposed > 0 && _proposed < 286432,
      recieved = _accepting? Buffer.alloc(_proposed): null,
      _d, _bpsn, _bpss, _bpsd = 0, _filled = 0;
  request.on("data", chunk => {
    _d = chunk.length;
    _bpsn = Math.floor(Date.now() / 1E3);
    if (!_accepting || !(_d > 0 && _d < 69208 && _proposed - _d > -1)) {
      _d = 0; request.pause();
    } else {
      recieved.fill(chunk, _filled, _filled + _d, "binary"); _filled += _d;
      if (_proposed != _bpsd && _bpsn == _bpss && _bpsd + _d > 69208) {
        request.pause(); request.resume(); _proposed -= _d; _bpsd += _d;
      } else {
        _bpss = _bpsn; _proposed -= _d; _bpsd = _d;
      }
    }
    if (!_d) https_proxy.resetSocket(413, request, response, socket);
  }).on("error", () => {
    request.pause(); https_proxy.resetSocket(400, request, response, socket);
  }).on("end", () => {
    console.log(`[HTTPS]: ${request.method} ${request.url}`);
    let forward = https.request({
      hostname: proxy, port: medius_https,
      method: request.method, path: request.url,
      headers: actualHeaders
    }, (medius) => {
      const data = [];
      medius.on("data", (chunk) => {
        data.push(chunk);
      });
      medius.on("end", () => {
        let content = Buffer.concat(data).toString("binary");
        let headers = medius.headers;
        content = content.replace(regex, local).replace(/https:/gi, "http:");
        if (typeof headers["location"] !== "undefined")
          headers["location"] = headers["location"].replace(regex, local).replace(/https:/gi, "http:");
        headers["content-length"] = content.length;
        response.writeHead(medius.statusCode, headers);
        response.end(content, "binary");
      });
    });
    forward.on("error", function(error) {
      console.log("POST https.request error:", error);
    });
    if (forward.method === "POST")
      forward.write(body);
    forward.end();
  });
}).listen(medius_https).on("timeout", socket => {
  socket.end("\n", () => socket.destroy());
}).on("clientError", (exception, socket) => {
  socket.end("\n", () => socket.destroy());
}).on("checkContinue", (request, response) => {
  https_proxy.resetSocket(400, request, response, null);
}).on("checkExpectation", (request, response) => {
  https_proxy.resetSocket(417, request, response, null);
}).on("connect", (request, socket) => {
  socket.end("\0", () => socket.destroy() && request.destroy());
}).on("connection", () => {}).on("listening", function() {
  console.log(`[net:proxy:https]: tcp:localhost:${medius_https} -> tcp:${proxy}:${medius_https}`);
});
https_proxy.resetSocket = (code, request, response, socket) => {
  if (socket === null) socket = request.socket;
  response.writeHead(code, {"Connection": "close"});
  response.end(() => socket.destroy() && request.destroy());
}
https_proxy.maxHeadersCount = 20;
https_proxy.headersTimeout = 85;
https_proxy.keepAliveTimeout = 3E4;
https_proxy.timeout = 3E3;
[10071, 10072, 10073, 10075].forEach((p) => {
  net.createServer(function(from) {
    var to = net.createConnection({
      host: proxy, port: p
    });
    from.pipe(to);
    to.pipe(from);
  }).listen(p, () => {
    console.log(`[net:forward:tcp]: tcp:localhost:${p} -> tcp:${proxy}:${p}`);
  });
});
