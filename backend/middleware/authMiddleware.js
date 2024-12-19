const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assure-toi que tu as défini JWT_SECRET dans .env
        req.user = decoded;
        next(); // Le token est valide, passe à la prochaine fonction
    } catch (error) {
        return res.status(401).json({ message: 'Token invalide' });
    }
};

module.exports = authMiddleware;
