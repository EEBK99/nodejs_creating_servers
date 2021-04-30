// console.log("hello");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/course" && req.method == "GET") {
  }
  res.statusCode = 201;
  res.write("User Created Successfully!");
  console.log(req.url, req.method);

  res.end();
});

server.listen(3000, console.log("Server Started!..."));
