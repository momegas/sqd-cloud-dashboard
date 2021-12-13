import React from 'react';
import { useSignupMutation } from '../app/services/api';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';

export default function SignInSide() {
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();
  const [formState, setFormState] = React.useState({
    email: '',
    password: '',
    error: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formState = {
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
    };

    const signupResponse = await signup(formState)
      .unwrap()
      .then((payload) => {
        console.log(payload);
        // save token to local storage for future use
        console.log(signupResponse);
        //localStorage.setItem('token', JSON.stringify(loginResponse));
        router.push('/login');
      })
      .catch((error) => {
        setFormState({ ...formState, error: error.data.error });
      });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FingerprintIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign-up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="username" label="User name" name="username" autoComplete="username" autoFocus />
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Create account
            </Button>

            {formState.error ? <Alert severity="error">{formState.error}</Alert> : ''}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
