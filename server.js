require('dotenv').config();
const app = require('./app');
const connectToDatabase = require('./src/db/Connection');

const PORT = 3001;

app.listen(PORT, () => {
    connectToDatabase()
      .then(() => {
        console.log('Conexão com o banco de dados estabelecida');
        console.log(`API Mega_Sena está sendo executada na porta ${PORT}`);
      })
      .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); // Encerrar o aplicativo em caso de erro na conexão
      });
  });
  