import React from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import SiteContainer from "../components/SiteContainer";
import { Layout } from "../components/layout";

export default function Sites() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            flex: 1,
            marginRight: "24px",
            paddingBottom: "10px",
            borderBottom: "1px solid #A4ACC4",
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
          padding: "38px 0",
        }}
      >
        <SiteContainer />
        <SiteContainer />
        <SiteContainer />
      </Grid>
    </Layout>
  );
}
