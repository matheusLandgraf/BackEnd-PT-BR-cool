async function connect() {
    if (globalThis.connection && globalThis.connection.state !=="disconnected")
        return globalThis.connection;
const mysql = require ("mysql2/promise");
const connection = await mysql.createConnection(
    "mysql://root:escola@localhost:3306/exmynode"    
);
console.log("conectou no mysql");
globalThis.connectin = connection;
return connection; 
}     

async function selectprodutos(){
    const conn = await connect();
    return await conn.query("select * from Produtos;")
    
}

module.exports = {selectprodutos};


