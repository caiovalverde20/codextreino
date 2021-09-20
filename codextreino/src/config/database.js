const mongoose = require('mongoose');
const config = require('@config');

module.exports = () =>  {
    let DB_URL = 'mongodb+srv://dev:1sV0G1yvzcVDJt1k@cluster0.chqgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    if (process.env.NODE_ENV === "prod") {
        DB_URL = config.db.production;
    } else if (process.env.NODE_ENV === "dev") {
        DB_URL = 'mongodb+srv://dev:1sV0G1yvzcVDJt1k@cluster0.chqgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    }
    
    mongoose.set('useFindAndModify', false);
    mongoose.connection.on('connected', () => {
        console.log('Conectado com o banco de dados!');
    })

    mongoose.connection.on('error', (err) => {
        console.log("Erro na conexão com o banco de dados: " + err);
    });

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        poolSize: 5,
        useUnifiedTopology: true
    });
}