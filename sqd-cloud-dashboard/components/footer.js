import React from 'react';
import Link from 'next/link';

import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ width: '100%', height: '150px', backgroundColor: '#112544' }}>
      <Container>
        <Grid container spacing={0} sx={{ padding: '50px 0px', backgroundColor: '#112544' }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ width: '100%' }}>© 2021 SquareCloud</Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'center' }}>
              <Typography sx={{ minWidth: 100 }}>
                <Link href="/about">ABOUT</Link>
              </Typography>

              <Typography sx={{ minWidth: 100 }}>
                <Link href="/docs">DOCS</Link>
              </Typography>

              <Typography sx={{ minWidth: 100 }}>
                <Link href="/legal">LEGAL</Link>
              </Typography>

              <Typography sx={{ minWidth: 100 }}>
                <Link href="/uport">SUPPORT</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
