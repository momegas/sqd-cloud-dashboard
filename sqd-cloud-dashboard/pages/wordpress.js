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

export default function Wordpress() {
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
          <Typography component="h1" variant="h5">
            Create wordpress with one click
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="wordpressname" label="Wordpress name" name="wordpressname" autoFocus />
            <Button size="large" type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
              Create wordpress site
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
