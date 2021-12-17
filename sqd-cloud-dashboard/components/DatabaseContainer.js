import { Box, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DatabaseContainer({ db, onDelete }) {
  const stackName = db.stackName;
  const stackType =
    db.services[0]?.repository?.name || db.services[1]?.repository?.name;

  const [databaseName, databasepass, databaseUser] =
    db.services[0]?.variables || db.services[1]?.variables;

  const appPort =
    db.services[0]?.ports[0]?.hostPort || db.services[1]?.ports[0]?.hostPort;
  console.log(db);
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      sx={{
        padding: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#09172A',
          borderRadius: '8px',
          minHeight: '100px',
          padding: '16px',
          border: '1px solid #A4ACC4',
        }}
      >
        <Typography variant="body">{stackName}</Typography>
        <IconButton aria-label="delete" onClick={() => onDelete(stackName)}>
          <DeleteIcon />
        </IconButton>
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: '8px',
            paddingBottom: '16px',
          }}
        >
          {`${databaseName?.value}, ${databasepass?.value}, ${databaseUser?.value}, port:${appPort}`}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '100%',
          }}
        >
          <Image
            src={
              stackType === 'postgres'
                ? '/images/postgresql.svg'
                : '/images/mongo.svg'
            }
            width={180}
            height={100}
          />
        </Box>
      </Box>
    </Grid>
  );
}
