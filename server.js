const appAPI = require('./src/app.js');

const PORT = 3000;

appAPI.listen(PORT, () => {
  console.log('servidor escutando!');
});
