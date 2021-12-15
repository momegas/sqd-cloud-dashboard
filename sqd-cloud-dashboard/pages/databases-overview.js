import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Layout } from '../components/layout';

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            sx={{
              flex: 1,
              marginRight: '24px',
              paddingBottom: '10px',
              borderBottom: '1px solid #A4ACC4',
            }}>
            Databases
          </Typography>
          <Button variant="contained">New database</Button>
        </Box>{' '}
      </Layout>{' '}
    </>
  );
}
