import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#3f51b5', color: 'white', padding: '20px 0' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    &copy; {new Date().getFullYear()} Suivi Colis. Tous droits réservés.
                </Typography>
                <Typography variant="body2" align="center">
                    <a href="/about" style={{ color: 'white', margin: '0 10px' }}>À propos</a>
                    <a href="/privacy" style={{ color: 'white', margin: '0 10px' }}>Politique de confidentialité</a>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
