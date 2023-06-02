import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './index.js';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Button } from '@mui/material';
import { getEvents } from './firebaseUtils'; // import getEvents function

function HomePage() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]); // new state for events
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchEvents(); // fetch events when user is logged in
      } else {
        navigate('/signin');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const fetchEvents = async () => {
    const events = await getEvents();
    setEvents(events);
  };

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, mb: 2 }}>
        <Typography variant="h4">Bienvenue à la page d'accueil !</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/calendar')}>
          Voir mon calendrier
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
