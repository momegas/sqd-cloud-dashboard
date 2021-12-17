import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Layout } from '../components/layout';
import SiteContainer from '../components/SiteContainer';
import DatabaseContainer from '../components/DatabaseContainer';
import Link from 'next/link';
import { useDeleteStackByNameMutation, useGetStacksByTypeMutation } from '../app/services/api';

export default function Dashboard() {
  const [getDbs, { isLoading }] = useGetStacksByTypeMutation();
  const [deleteDb, { isDeleting }] = useDeleteStackByNameMutation();
  const [dbs, setdbs] = useState([]);

  const handleDeleteDb = async (name) => {
    const deleteDbResponse = await deleteDb(name).unwrap();
    if (deleteDbResponse) {
      setdbs((db) => db.filter((a) => db.stackName !== name));
    }
  };

  useEffect(async () => {
    const getDbsResponse = await getDbs(['mongo']).unwrap();
    if (getDbsResponse) {
      setdbs(getDbsResponse);
    }
  }, []);

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
          <Link href="/create-database" passHref>
            <Button
              size="large"
              type="submit"
              variant="contained"
              // sx={{ mt: 3, mb: 2 }}
            >
              Create database
            </Button>
          </Link>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{
            padding: '38px 0',
          }}>
          {dbs && dbs.map((db, i) => <DatabaseContainer key={i} db={db} onDelete={handleDeleteDb} />)}
        </Grid>
      </Layout>{' '}
    </>
  );
}
