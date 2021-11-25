const mongoose = require('mongoose');

const Conn = (url, user, pass, data)=>{
  
  mongoose.connect(`${url}/${data}`,{
      user:user,
      pass:pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log('Conexao com o MongoDB executada com sucesso');
  }).catch((err) => {
    console.error(err);
  })
}

module.exports = Conn;