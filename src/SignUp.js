import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './index.js';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, mb: 2 }}>
        <Typography variant="h4">Sign Up</Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <Typography color="error">{error}</Typography>}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            Already have an account ? <Link to="/signin">Sign In</Link>
          </Typography>
        </Box>
      </form>
    </Container>
  );
}

export default SignUp;
