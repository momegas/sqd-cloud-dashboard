import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SiteContainer from '../components/SiteContainer';
import DatabaseContainer from '../components/DatabaseContainer';
import SqdNavbar from '../components/sqdNavbar';
import {
  useDeleteStackByNameMutation,
  useGetStacksByTypeMutation,
} from '../app/services/api';

export default function Dashboard() {
  const [sites, setSites] = useState([]);
  const [databases, setDatabases] = useState([]);
  const [apps, setApps] = useState([]);

  const [getStack, { isLoading }] = useGetStacksByTypeMutation();
  const [deleteApp, { isDeleting }] = useDeleteStackByNameMutation();

  const handleDeleteAppClick = async (name) => {
    const deleteAppResponse = await deleteApp(name).unwrap();
    if (deleteAppResponse) {
      setApps((app) => app.filter((a) => a.stackName !== name));
    }
  };

  const handleDeleteDbClick = async (name) => {
    const deleteDatabaseResponse = await deleteApp(name).unwrap();
    if (deleteDatabaseResponse) {
      setDatabases((app) => app.filter((a) => a.stackName !== name));
    }
  };

  useEffect(async () => {
    const getStacksResponse = await getStack([
      'wordpress',
      'mongo',
      'postgres',
    ]).unwrap();
    if (getStacksResponse) {
      const appsStack = getStacksResponse.filter((stack) =>
        stack.services.find((service) =>
          ['wordpress'].includes(service.repository.name),
        ),
      );

      setApps(appsStack);

      const databasesStacks = getStacksResponse.filter((stack) =>
        stack.services.find((service) =>
          ['mongo', 'postgres'].includes(service.repository.name),
        ),
      );

      setDatabases(databasesStacks);
    }
  }, []);

  return (
    <>
      <SqdNavbar />
      <Container sx={{ minHeight: 'calc(100vh - 150px)' }}>
        <Box sx={{ paddingTop: '64px' }}>
          <Typography
            variant="h3"
            sx={{
              paddingBottom: '20px',
            }}
          >
            Welcome, Ana
          </Typography>
          <Typography
            variant="h4"
            sx={{
              paddingBottom: '20px',
            }}
          >
            Let's build something new
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#3A557F',
            borderRadius: '12px',
            minHeight: '100px',
            margin: '32px 0px',
            width: '100%',
            padding: '38px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              width: '100%',
              marginRight: '24px',
              paddingTop: '20px',
              paddingBottom: '10px',
              borderBottom: '1px solid #A4ACC4',
            }}
          >
            Sites
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
              padding: '38px 0',
            }}
          >
            {sites &&
              sites.map((site, i) => (
                <SiteContainer stack={site} onDelete={() => {}} key={i} />
              ))}
          </Grid>
          <Typography
            variant="h5"
            sx={{
              width: '100%',
              marginRight: '24px',
              paddingTop: '36px',
              paddingBottom: '10px',
              borderBottom: '1px solid #A4ACC4',
            }}
          >
            Databases
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
              padding: '38px 0',
            }}
          >
            {databases &&
              databases.map((database, i) => (
                <SiteContainer
                  stack={database}
                  onDelete={handleDeleteDbClick}
                  key={i}
                />
              ))}
          </Grid>
          <Typography
            variant="h5"
            sx={{
              width: '100%',
              marginRight: '24px',
              paddingTop: '36px',
              paddingBottom: '10px',
              borderBottom: '1px solid #A4ACC4',
            }}
          >
            1-click Apps
          </Typography>
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
        </Box>
      </Container>
      <footer />
    </>
  );
}
