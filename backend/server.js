const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Synchronisation avec la base de données
sequelize.sync().then(() => {
    console.log('Base de données synchronisée');
}).catch((err) => {
    console.error('Erreur lors de la synchronisation de la base de données:', err);
});

//Mes routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
