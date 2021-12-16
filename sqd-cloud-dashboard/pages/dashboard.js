import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import SiteContainer from "../components/SiteContainer";
import DatabaseContainer from "../components/DatabaseContainer";
import SqdNavbar from "../components/sqdNavbar";
export default function Dashboard() {
  return (
    <>
      <SqdNavbar />
      <Container sx={{ minHeight: "calc(100vh - 150px)" }}>
        <Box sx={{ paddingTop: "64px" }}>
          <Typography
            variant="h3"
            sx={{
              paddingBottom: "20px",
            }}
          >
            Welcome, Ana
          </Typography>
          <Typography
            variant="h4"
            sx={{
              paddingBottom: "20px",
            }}
          >
            Let's build something new
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#3A557F",
            borderRadius: "12px",
            minHeight: "100px",
            margin: "32px 0px",
            width: "100%",
            padding: "38px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              marginRight: "24px",
              paddingTop: "20px",
              paddingBottom: "10px",
              borderBottom: "1px solid #A4ACC4",
            }}
          >
            Sites
          </Typography>
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
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              marginRight: "24px",
              paddingTop: "36px",
              paddingBottom: "10px",
              borderBottom: "1px solid #A4ACC4",
            }}
          >
            Databases
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{
              padding: "38px 0",
            }}
          >
            <DatabaseContainer />
            <DatabaseContainer />
            <DatabaseContainer />
          </Grid>
          <Typography
            variant="h5"
            sx={{
              width: "100%",
              marginRight: "24px",
              paddingTop: "36px",
              paddingBottom: "10px",
              borderBottom: "1px solid #A4ACC4",
            }}
          >
            1-click Apps
          </Typography>
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
            <SiteContainer />
          </Grid>
        </Box>
      </Container>
      <footer />
    </>
  );
}
