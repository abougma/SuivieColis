import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Utilisation de useNavigate et Link
import axios from 'axios';
import { TextField, Button, Grid, Typography, Container } from '@mui/material'; // Import des composants MUI
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Utilisation de useNavigate pour la redirection

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password,
            });

            const { token } = response.data;
            localStorage.setItem('authToken', token);
            navigate('/dashboard');  // Rediriger après la connexion
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Erreur lors de la connexion');
            } else {
                setError('Problème de connexion au serveur');
            }
        }
    };

    return (
        <Container maxWidth="sm" className="login-container">
            <Typography variant="h4" gutterBottom>Se connecter</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleLogin}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Mot de passe"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Se connecter
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Typography variant="body2" align="center" marginTop={2}>
                Pas de compte ? <Link to="/register">S'inscrire</Link>
            </Typography>
        </Container>
    );
};

export default LoginPage;
