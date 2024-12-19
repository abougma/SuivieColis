const { Sequelize } = require('sequelize');

// Configuration de la base de données
const sequelize = new Sequelize('suivi_colis', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
