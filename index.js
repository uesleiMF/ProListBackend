if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const ProdutosRouter = require('./routes/produtos.routes');
const connectDB = require('./conn/conn');

const app = express();

/* 🔐 CORS mais explícito (evita "Failed to fetch") */
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/* 🔗 Rotas */
app.use('/produtos', ProdutosRouter);

/* 🧪 Rota de teste */
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor rodando em http://0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Falha ao iniciar servidor:', error.message);
    process.exit(1);
  }
}

startServer();
