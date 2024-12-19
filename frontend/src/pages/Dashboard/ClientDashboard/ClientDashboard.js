import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Avatar, Divider } from '@mui/material';
import { LocalShipping, Done, ErrorOutline } from '@mui/icons-material';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const ClientDashboard = () => {
    // Données d'exemple utilisateur
    const userInfo = {
        name: 'Jean Dupont',
        email: 'jean.dupont@example.com',
        avatar: 'https://i.pravatar.cc/150?img=3',
    };

    // Exemple de suivis de colis
    const shipments = [
        {
            trackingNumber: '1234567890',
            status: 'En transit',
            dateShipped: '2024-12-15',
            expectedDelivery: '2024-12-20',
        },
        {
            trackingNumber: '9876543210',
            status: 'Livré',
            dateShipped: '2024-12-10',
            expectedDelivery: '2024-12-12',
        },
        {
            trackingNumber: '5678901234',
            status: 'En retard',
            dateShipped: '2024-12-05',
            expectedDelivery: '2024-12-10',
        },
    ];

    // Fonction pour obtenir l'icône de statut
    const getStatusIcon = (status) => {
        switch (status) {
            case 'En transit':
                return <LocalShipping color="primary" />;
            case 'Livré':
                return <Done color="success" />;
            case 'En retard':
                return <ErrorOutline color="error" />;
            default:
                return <ErrorOutline color="action" />;
        }
    };

    return (
        <div>
            {/* NavBar */}
            <NavBar />

            <Container maxWidth="lg" sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingTop: 5 }}>
                <Box sx={{ textAlign: 'center', color: 'primary.main', marginBottom: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Tableau de Bord - Client
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Suivi en temps réel de vos colis
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Profil de l'utilisateur */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: 'primary.light' }}>
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <Avatar src={userInfo.avatar} sx={{ width: 80, height: 80, marginBottom: 2 }} />
                                    <Typography variant="h6">{userInfo.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {userInfo.email}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Liste des colis suivis */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" gutterBottom>
                            Vos colis
                        </Typography>
                        {shipments.map((shipment, index) => (
                            <Card key={index} sx={{ borderLeft: '5px solid #3f51b5', boxShadow: 3, marginBottom: 3 }}>
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="h6">Colis #{shipment.trackingNumber}</Typography>
                                        <Box display="flex" alignItems="center">
                                            {getStatusIcon(shipment.status)}
                                            <Typography variant="body2">{shipment.status}</Typography>
                                        </Box>
                                    </Box>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2">Expédié le: {shipment.dateShipped}</Typography>
                                    <Typography variant="body2">Livraison prévue: {shipment.expectedDelivery}</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                    >
                                        Voir les détails
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ClientDashboard;
