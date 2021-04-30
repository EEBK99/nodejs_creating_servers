// console.log("hello");

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/user") {
    if (req.method == "GET") {
      res.write("User Fetched Successfully!");
    } else if (req.method == "POST") {
      res.write("User Created Successfully!");
    } else if (req.method == "DELETE") {
      res.write("User Deleted Successfully!");
    }
  } else if (req.url == "/course") {
    if (req.method == "GET") {
      res.write("Course Fetched Successfully!");
    } else if (req.method == "POST") {
      res.write("Course Created Successfully!");
    } else if (req.method == "DELETE") {
      res.write("Course Deleted Successfully!");
    }
  }
  res.end();

  res.statusCode = 201;
  console.log(req.url, req.method);
});

server.listen(3000, console.log("Server Started!..."));
