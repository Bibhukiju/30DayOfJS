const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node</title></head>");
  res.write("<body><h1>Bibhu</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
