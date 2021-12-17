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
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image
            src={
              stackType === 'postgres'
                ? '/images/postgresql.svg'
                : '/images/mongo.svg'
            }
            width={30}
            height={30}
          />
          <Typography
            variant="body"
            sx={{
              fontSize: '20px',
              marginLeft: '10px',
            }}
          >
            {stackName}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: '10px',
            paddingBottom: '6px',
            opacity: '0.8',
          }}
        >
          {stackType === 'postgres'
            ? `postgresql://${databaseUser?.value}:${databasepass?.value}@cluster1.squaredev.io:${appPort}`
            : `mongodb://${databaseName?.value}:${databasepass?.value}@cluster1.squaredev.io:${appPort}`}
        </Typography>
        <IconButton
          aria-label="delete"
          onClick={() => onDelete(stackName)}
          sx={{
            fontSize: '20px',
            opacity: '0.6',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
        >
          <DeleteIcon
            sx={{
              fontSize: '20px',
            }}
          />
        </IconButton>
      </Box>
    </Grid>
  );
}
