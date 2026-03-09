/*
(async () => {
    const db = require("./db")
    console.log("começou");
    console.log("select * from produtos");
    const produtos = await db.selectprodutos();
    console.log(produtos);
})();
*/

(async () => {
  const db = require("./db");
  console.log("Começou!");

  console.log("INSERT INTO ALUNOS"); // 2º
  const result = await db.insertProdutos({
    descricao: "sla",
    quantidade: 2,
})});