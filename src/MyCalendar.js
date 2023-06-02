import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './index.js';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Button } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents, addEvent } from './firebaseUtils'; // import getEvents and addEvent functions
import EventForm from './EventForm'; // import EventForm component

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]); // new state for events
  const [showForm, setShowForm] = useState(false); // new state to control the visibility of the form
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

  const handleShowForm = () => {
    setShowForm(true); // show the form
  };

  const handleHideForm = () => {
    setShowForm(false); // hide the form
  };

  const handleCreateEvent = async (newEvent) => {
    await addEvent(newEvent);
    fetchEvents();
    setShowForm(false); // hide the form after creating the event
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Bienvenue {user ? user.displayName : 'User'}
        </Typography>
        <Button variant="contained" onClick={handleShowForm}>
          Ajouter un événement
        </Button>
        {showForm && <EventForm onFormSubmit={handleCreateEvent} onFormClose={handleHideForm} />}
        <Box mt={8}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: '50px 0' }}
          />
        </Box>
      </div>
    </Container>
  );
}

export default MyCalendar;