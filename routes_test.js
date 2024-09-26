const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greetings</title></head>");
    res.write("<body><h1>Hello from my Node.js</h1></body>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type = "text" name = "username"><button type="submit">Create User</button></form></body>'
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<ul><li>User1</li></ul>");
    res.write("<ul><li>User2</li></ul>");
    res.write("<ul><li>User3</li></ul>");
    // res.write(
    //   '<body><form action="/message" method="POST"><input type = "text" name = "message"><button type="submit">Send</button></form></body>'
    // );
    res.write("<html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
