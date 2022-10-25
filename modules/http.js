const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>home page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Johan G.",
        email: "johan@gmail.com",
      },
      {
        name: "Fulano Silva",
        email: "fulano@gmail.com",
      },
    ];

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
