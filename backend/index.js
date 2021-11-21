const express = require('express');
const cors  = require('cors');
const ProdutosRouter = require('./routes/produtos.routes');
const Conn = require('./conn/conn');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/produtos', ProdutosRouter);

Conn();

const port = 3001;
app.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
})


