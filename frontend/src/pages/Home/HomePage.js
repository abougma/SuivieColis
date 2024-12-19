import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import { Send, LocalShipping, PostAdd } from '@mui/icons-material';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className="home-container">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1 className="hero-title">Bienvenue sur Suivi Colis</h1>
                    <p className="hero-subtitle">
                        Découvrez nos services de suivi et d'envoi de colis.
                    </p>
                </div>

                {/* Cards Section */}
                <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap'}}>
                    {/* Card: Envoyer une Lettre */}
                    <Card sx={{maxWidth: 345, margin: 2}}>
                        <CardContent>
                            <Send fontSize="large" color="primary"/>
                            <Typography variant="h5" component="div" sx={{marginTop: '15px'}}>
                                Envoyer une Lettre
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Envoyez vos lettres et documents en toute sécurité et suivez leur livraison.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/send-letter" style={{textDecoration: 'none'}}>
                                <Button size="small" color="primary">
                                    En savoir plus
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>

                    {/* Card: Envoyer un Colis */}
                    <Card sx={{maxWidth: 345, margin: 2}}>
                        <CardContent>
                            <LocalShipping fontSize="large" color="primary"/>
                            <Typography variant="h5" component="div" sx={{marginTop: '15px'}}>
                                Envoyer un Colis
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Suivez l'expédition de vos colis en temps réel et gérez vos envois facilement.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/send-package" style={{textDecoration: 'none'}}>
                                <Button size="small" color="primary">
                                    En savoir plus
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>

                    {/* Card: Créer un Compte */}
                    <Card sx={{maxWidth: 345, margin: 2}}>
                        <CardContent>
                            <PostAdd fontSize="large" color="primary"/>
                            <Typography variant="h5" component="div" sx={{marginTop: '15px'}}>
                                Créer un Compte
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Inscrivez-vous pour gérer vos envois et suivre vos colis en temps réel.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/register" style={{textDecoration: 'none'}}>
                                <Button size="small" color="primary">
                                    Créer un compte
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
