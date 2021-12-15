import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Footer } from './footer';
import SqdNavbar from './sqdNavbar';

export const Layout = ({ children }) => (
  <>
    <Container sx={{ minHeight: 'calc(100vh - 150px)' }}>
      <SqdNavbar></SqdNavbar>
      <Box
        sx={{
          backgroundColor: '#3A557F',
          borderRadius: '12px',
          minHeight: '100px',
          margin: '32px 0px',
          width: '100%',
          padding: '38px 15px',
        }}>
        {children}
      </Box>
    </Container>
    <Footer />
  </>
);
