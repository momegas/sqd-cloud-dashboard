// import React from "react";
// import { useSignupMutation } from "../app/services/api";
// import { useRouter } from "next/router";
// import { NextPageWithLayout } from "./_app";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Alert } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import SiteContainer from "../components/SiteContainer";
import Link from "next/link";
import { Layout } from "../components/layout";
import { useGetStacksByTypeMutation } from "../app/services/api";

export default function Wordpress() {
  const [getStack, { isLoading }] = useGetStacksByTypeMutation();
  const [wpStacks, setWpStacks] = useState([]);

  console.log(wpStacks);

  useEffect(async () => {
    const getStacksResponse = await getStack("wordpress").unwrap();
    if (getStacksResponse) {
      setWpStacks(getStacksResponse);
    }
  }, []);

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
          padding: "38px 0",
        }}
      >
        {wpStacks && wpStacks.map((wpStack, i) => <SiteContainer key={i} />)}
      </Grid>
    </Layout>
  );
}
