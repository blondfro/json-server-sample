const jsonServer = require("json-server");
const path = require("path");
const db = require("./db");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname + "db.json"));
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(jsonServer.rewriter({ "/api/users": "/users" }));

server.get("/users", (req, res) => {
  res.json(db.users);
});

server.get("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let user = db.users.find((user) => user.id === id);
  res.json(user);
});

server.post("/users", (req, res) => {
  let id = db.users.length + 1;
  let newUser = { id, ...req.body };
  let newDb = [newUser, ...db.users].sort((a, b) => a.id - b.id);
  db.users = [...newDb];
  res.json(db.users);
});

server.put("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let newUser = req.body;
  if (req.body.id) {
    newUser = req.body;
  } else newUser = { id, ...req.body };

  let newDb = [newUser, ...db.users.filter((user) => user.id !== id)].sort(
    (a, b) => a.id - b.id
  );
  db.users = [...newDb];
  res.json(db.users);
});

server.delete("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let newDb = [...db.users.filter((user) => user.id !== id)];
  db.users = [...newDb];
  res.json(db);
});

server.use(router);
server.listen(port, () => console.log("Server is running on port: " + port));
