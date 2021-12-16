import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import SiteContainer from '../components/SiteContainer';
import { Layout } from '../components/layout';
import {
  useDeleteStackByNameMutation,
  useGetStacksByTypeMutation,
} from '../app/services/api';

export default function Sites() {
  const [getSites, { isLoading }] = useGetStacksByTypeMutation();
  const [deleteSite, { isDeleting }] = useDeleteStackByNameMutation();
  const [sites, setSites] = useState([]);

  const handleDeleteSiteClick = async (name) => {
    const deleteAppResponse = await deleteSite(name).unwrap();
    if (deleteAppResponse) {
      setSites((app) => app.filter((a) => a.stackName !== name));
    }
  };

  useEffect(async () => {
    const getSitesResponse = await getSites(['site']).unwrap();
    if (getSitesResponse) {
      setSites(getSitesResponse);
    }
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            flex: 1,
            marginRight: '24px',
            paddingBottom: '10px',
            borderBottom: '1px solid #A4ACC4',
          }}
        >
          Sites
        </Typography>
        <Button variant="contained">New Site</Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          padding: '38px 0',
        }}
      >
        {sites &&
          sites.map((site, i) => (
            <SiteContainer
              key={i}
              stack={site}
              onDelete={handleDeleteSiteClick}
            />
          ))}
      </Grid>
    </Layout>
  );
}
