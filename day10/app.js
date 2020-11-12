const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body><h1>Form</h1><form><input type='text'></form></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body><h1>Bibhu</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
