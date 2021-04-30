// console.log("hello");

const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url == "/user") {
//     if (req.method == "GET") {
//       res.write("User Fetched Successfully!");
//     } else if (req.method == "POST") {
//       res.write("User Created Successfully!");
//     } else if (req.method == "DELETE") {
//       res.write("User Deleted Successfully!");
//     }
//   } else if (req.url == "/course") {
//     if (req.method == "GET") {
//       res.write("Course Fetched Successfully!");
//     } else if (req.method == "POST") {
//       res.write("Course Created Successfully!");
//     } else if (req.method == "DELETE") {
//       res.write("Course Deleted Successfully!");
//     }
//   }
//   res.end();

//   res.statusCode = 201;
//   console.log(req.url, req.method);
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/user") {
    if (req.method == "GET") {
      res.write("<h1>User Fetched Successfully!</h1>");
    } else if (req.method == "POST") {
      res.write("<h1>User Created Successfully!</h1>");
    } else if (req.method == "DELETE") {
      res.write("<h1>User Deleted Successfully!</h1>");
    }
    res.end();
  } else if (req.url == "/course") {
    if (req.method == "GET") {
      res.write("<h1>Course Fetched Successfully!</h1>");
    } else if (req.method == "POST") {
      res.write("<h1>Course Created Successfully!</h1>");
    } else if (req.method == "DELETE") {
      res.write("<h1>Course Deleted Successfully!</h1>");
    }
    res.end();
  }
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(400);
        res.write("Error: Something Unexpected!");
      } else {
        res.write(data);
      }
      res.end();
    });
  }

  res.statusCode = 201;
  console.log(req.url, req.method);
});

server.listen(3000, console.log("Server Started!..."));
