import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function SiteContainer({
  stack: { stackName, services },
  onDelete,
}) {
  const appName = stackName;
  const appPort = services[0].ports[0].hostPort;
  const appLink = `http://cluster.squaredev.io:${appPort}`;

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
          cursor: 'pointer',
        }}
      >
        <IconButton aria-label="delete" onClick={() => onDelete(appName)}>
          <DeleteIcon />
        </IconButton>

        <Typography variant="body">{appName}</Typography>
        <Link href={appLink} passHref={true}>
          <Typography
            variant="subtitle2"
            sx={{
              paddingTop: '8px',
              paddingBottom: '16px',
            }}
          >
            {`${appName}.cluster.squaredev.io`}
          </Typography>
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Image src={'/images/sticky-notes.png'} width={160} height={90} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              marginLeft: '20px',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                marginRight: '6px',
              }}
            >
              Deploys from
            </Typography>
            <Image src={'/images/github.png'} width={16} height={16} />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
