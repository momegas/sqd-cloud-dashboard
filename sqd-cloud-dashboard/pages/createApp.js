import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { Layout } from '../components/layout';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useCreateWPMutation } from '../app/services/api';
import { useRouter } from 'next/router';

export default function createApp() {
  const router = useRouter();
  const [createWp, { isLoading }] = useCreateWPMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.wordpressname.value;
    const createWPResponse = await createWp({ name, type: 'wp' }).unwrap();
    if (createWPResponse) {
      router.push('/apps-overview');
    }
  };

  //tabs
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{value === index && <div> {children}</div>}</div>;
  }

  return (
    <Layout>
      <Tabs value={value} onChange={handleTabs}>
        <Tab label="WordPress" />
        <Tab label="App 2" />
        <Tab label="App 3" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography
          variant="h5"
          sx={{
            paddingTop: '16px',
          }}
        >
          New Wordpress Site
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              opacity: '0.8',
            }}
          >
            <Image src={'/images/wordpress.svg'} width={50} height={50} />
          </Box>
          <Box
            sx={{
              marginLeft: '10px',
            }}
          >
            <Typography variant="h6">WordPress</Typography>
            <Typography variant="subtitle2">by SquareCloud</Typography>
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{
            paddingTop: '24px',
            paddingBottom: '16px',
          }}
        >
          Choose site name
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="wordpressname"
            name="wordpressname"
            autoFocus
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
            }}
          >
            Create wordpress site
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        App 2 detail
      </TabPanel>
      <TabPanel value={value} index={2}>
        App 3 detail
      </TabPanel>
    </Layout>
  );
}
