const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {
  let fullUrl;

  if(user && pass) {
    // Mongo Atlas
    fullUrl = `mongodb+srv://${user}:${pass}@${url}/${data}?retryWrites=true&w=majority`;
  } else {
    // Mongo local
    fullUrl = `${url}/${data}`;
  }

  mongoose.connect(fullUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err.message));
};

module.exports = Conn;
