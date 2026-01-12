if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const ProdutosRouter = require('./routes/produtos.routes');
const connectDB = require('./conn/conn');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/produtos', ProdutosRouter);

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

startServer();
