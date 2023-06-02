import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function WelcomePage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Bienvenue sur votre application calendrier de vacances
            </Typography>
            <Button variant="outlined" component={Link} to="/signin">
                Se connecter
            </Button>
            <Button variant="outlined" component={Link} to="/signup">
                S'inscrire
            </Button>
        </Box>
    );
}

export default WelcomePage;
