import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, TextField, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import {HelpOutline} from '@mui/icons-material';
import { Speed } from   '@mui/icons-material';

const NavBar = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (trackingNumber) {
            // Naviguer vers la page de suivi avec le numéro de suivi dans l'URL
            navigate(`/tracking/${trackingNumber}`);
        } else {
            // Si aucun numéro n'est entré, tu peux afficher un message ou faire rien
            alert('Veuillez entrer un numéro de suivi');
        }
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
                    component={Link}
                    to="/"
                >
                    Suivi Colis
                </Typography>

                {/* Zone de Recherche */}
                <Box
                    component="form"
                    onSubmit={handleSearch}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        maxWidth: '400px',
                        marginRight: '20px',
                    }}
                >
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Numéro de suivi"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        sx={{ flexGrow: 1 }}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ marginLeft: 1 }}>
                        <Search />
                    </Button>
                </Box>

                <Button
                    color="inherit"
                    component={Link}
                    to="/login"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Speed  sx={{ fontSize: 20 }} />
                    Accès rapides
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/login"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <HelpOutline sx={{ fontSize: 20 }} />
                   Aide
                </Button>
                <Button
                    color="inherit"
                    component={Link}
                    to="/login"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AccountCircle sx={{ fontSize: 20 }} />
                    Se connecter
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
