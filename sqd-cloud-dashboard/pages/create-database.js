import { Container, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useCreateWPMutation } from '../app/services/api';
import { Layout } from '../components/layout';

export default function Databases() {
  const dbs = [
    {
      type: 'mongo',
      readable: 'MongoDB',
      logo: '/images/mongo.svg',
    },
    {
      type: 'postgres',
      readable: 'PostGres',
      logo: '/images/postgresql.svg',
    },
  ];

  const router = useRouter();

  const [createDb, { isLoading }] = useCreateWPMutation();

  const [selectedDb, updateSelectedDb] = useState('mongo');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.dbname.value;
    const createWPResponse = await createDb({ name, type: selectedDb }).unwrap();
    if (createWPResponse) {
      router.push('/database-overview');
    }
  };

  return (
    <Layout>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography
          variant="h5"
          sx={{
            paddingTop: '16px',
          }}>
          Create database cluster
        </Typography>

        <Typography
          variant="h6"
          sx={{
            padding: '20px 0',
          }}>
          Choose database engine
        </Typography>
        <Box
          sx={{
            display: 'flex',
          }}>
          {dbs.map((db) => (
            <Box
              onClick={() => updateSelectedDb(db.type)}
              sx={{
                minHeight: '150px',
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                border: selectedDb == db.type ? '1px solid #0EBAFD' : '1px solid #CFD9F7',
                cursor: 'pointer',
              }}>
              <Image src={db.logo} width={50} height={50} />
              <Typography variant="subtitle1" marginTop={'8px'}>
                {db.readable}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <Typography
            variant="h6"
            sx={{
              paddingTop: '24px',
              paddingBottom: '16px',
            }}>
            Choose database cluster name {selectedDb}
          </Typography>
          <TextField
            id="dbname"
            name="dbname"
            variant="outlined"
            sx={{
              padding: '0',
              marginBottom: '40px',
              width: '40%',
            }}
          />
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{
              padding: '10px',
              marginBottom: '40px',
            }}>
            Create database
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
