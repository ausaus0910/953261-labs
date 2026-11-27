// 953261 Lab 1 — My first Node.js server
// Run:  npm start   then open http://localhost:3000
//
// TODO (Part D of the lab sheet):
//   1. Change the HTML in GET / to show your nickname and student ID.
//   2. Add a route  GET /api/me  that returns JSON:
//        { "name": "...", "studentId": "...", "favouriteLanguage": "..." }
//      with status 200 and Content-Type application/json.
//   3. Any other path must return status 404 with a short HTML message.
//   4. Commit after each step with a clear message, then push to GitHub.

import http from "node:http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Hello, 953261!</h1><p>My name is Pongsapat Tonngern (student ID 692115030)</p>");
    return;
  }

  // TODO: add GET /api/me here
  if (req.method === "GET" && req.url === "/api/me"){
    const profile = {
      name: "Pongsapat Tonngern",
      studentID: "692115030",
      favLanguage: "English"
    }
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(profile)); // stringify converts JS value to JSON text
    return;
  }
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("404 NOT FOUND!");
});

server.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));