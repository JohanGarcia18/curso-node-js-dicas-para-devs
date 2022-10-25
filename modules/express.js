const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

// Definir tipo de dados da requisição para JSON
app.use(express.json());

// Setar o ejs para usar arquivos html dinâmicos
app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

// Endpoint para a renderização do html dinâmico
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users: users });
  // podia ser: res.render("index", { users });
});

// Endpoint de pegar todos os usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Endpoint de pegar usuário por Id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Endpoint de criar novo usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint de atualizar usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint de deletar usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
