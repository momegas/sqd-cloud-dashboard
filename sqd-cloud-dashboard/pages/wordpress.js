import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import SiteContainer from '../components/SiteContainer';
import Link from 'next/link';
import { Layout } from '../components/layout';
import {
  useGetStacksByTypeMutation,
  useDeleteStackByNameMutation,
} from '../app/services/api';

export default function Wordpress() {
  const [getApps, { isLoading }] = useGetStacksByTypeMutation();
  const [deleteApp, { isDeleting }] = useDeleteStackByNameMutation();
  const [apps, setApps] = useState([]);

  console.log(apps);

  const handleDeleteAppClick = async (name) => {
    const deleteAppResponse = await deleteApp(name).unwrap();
    if (deleteAppResponse) {
      setApps((app) => app.filter((a) => a.stackName !== name));
    }
  };

  useEffect(async () => {
    const getAppsResponse = await getApps(['wordpress']).unwrap();
    if (getAppsResponse) {
      setApps(getAppsResponse);
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
          1-click Apps
        </Typography>
        <Link href="/createApp" passHref>
          <Button
            size="large"
            type="submit"
            variant="contained"
            // sx={{ mt: 3, mb: 2 }}
          >
            Create wordpress site
          </Button>
        </Link>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          padding: '38px 0',
        }}
      >
        {apps &&
          apps.map((app, i) => (
            <SiteContainer
              stack={app}
              onDelete={handleDeleteAppClick}
              key={i}
            />
          ))}
      </Grid>
    </Layout>
  );
}
