import { Box, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DatabaseContainer({ db, onDelete }) {
  console.log(db);
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      sx={{
        padding: 0,
      }}>
      <Box
        sx={{
          backgroundColor: '#09172A',
          borderRadius: '8px',
          minHeight: '100px',
          padding: '16px',
          border: '1px solid #A4ACC4',
        }}>
        <Typography variant="body">{db.stackName}</Typography>
        <IconButton aria-label="delete" onClick={() => onDelete(db.stackName)}>
          <DeleteIcon />
        </IconButton>
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: '8px',
            paddingBottom: '16px',
          }}>
          Here comes the connection string and password ?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%',
          }}>
          <Image src={'/images/postgresql.svg'} width={180} height={100} />
        </Box>
      </Box>
    </Grid>
  );
}
