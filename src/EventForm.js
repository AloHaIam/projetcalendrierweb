import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { TextField, Button } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';

function EventForm({ onFormSubmit, onFormClose }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = { title, start, end };
    await onFormSubmit(event);
    onFormClose(); // close the form after the event is submitted
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="title"
        label="Titre de l'événement"
        name="title"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <label>Début de l'événement</label>
        <DatePicker selected={start} onChange={(date) => setStart(date)} />
      </div>
      <div>
        <label>Fin de l'événement</label>
        <DatePicker selected={end} onChange={(date) => setEnd(date)} />
      </div>
      <Button type="submit">Créer l'événement</Button>
      <Button onClick={onFormClose}>Annuler</Button> {/* new button to close the form */}
    </form>
  );
}

export default EventForm;
