import React, { useState } from 'react';
import { TextField, Button, Box, DatePicker, TimePicker } from '@mui/material';
import { addEvent } from './firebaseUtils'; // import your function to add an event

function AddEventForm() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // You will need to convert the date and time to a format that Firebase understands
    // I'm assuming that your 'addEvent' function accepts an object with the event details
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime.getHours(), startTime.getMinutes());
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime.getHours(), endTime.getMinutes());

    await addEvent({ title, start, end });

    // Clear the form
    setTitle('');
    setStartDate(null);
    setStartTime(null);
    setEndDate(null);
    setEndTime(null);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={setStartDate}
        required
      />
      <TimePicker
        label="Start Time"
        value={startTime}
        onChange={setStartTime}
        required
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={setEndDate}
        required
      />
      <TimePicker
        label="End Time"
        value={endTime}
        onChange={setEndTime}
        required
      />
      <Button type="submit">
        Add Event
      </Button>
    </Box>
  );
}

export default AddEventForm;
