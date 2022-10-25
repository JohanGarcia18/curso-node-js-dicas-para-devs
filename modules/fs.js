const fs = require("fs");
const path = require("path");

// Cria um diretório
// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Cria um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Hello, node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");

    // Adicionar um conteúdo a um arquivo:
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Hello, word!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: " + error);
        }

        console.log(data);
      }
    );
  }
);
