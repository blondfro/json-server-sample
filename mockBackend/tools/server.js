const jsonServer = require("json-server");
const path = require("path");
const db = require("./db");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({ "/api/users": "/users" }));

server.get("/users", (req, res) => {
  let results = db.users;
  res.json(results);
});

server.use(router);
server.listen(port, () => console.log("Server is running on port: " + port));
