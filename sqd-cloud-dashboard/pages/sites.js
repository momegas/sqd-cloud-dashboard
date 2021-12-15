import React from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import SiteContainer from "../components/SiteContainer";

export default function Sites() {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#3A557F",
          borderRadius: "12px",
          minHeight: "100px",
          margin: "32px auto",
          width: "100%",
          padding: "28px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            paddingTop: "38px",
          }}
        >
          <SiteContainer />
          <SiteContainer />
          <SiteContainer />
        </Grid>
      </Container>
    </>
  );
}
