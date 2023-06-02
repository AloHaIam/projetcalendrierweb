import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from './index.js';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      navigate('/home');  // Redirect to /home
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, mb: 2 }}>
        <Typography variant="h4">Sign In</Typography>
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Box mt={2}>
          <Typography variant="body2" color="text.secondary" align="center">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </form>
    </Container>
  );
}

export default SignIn;
