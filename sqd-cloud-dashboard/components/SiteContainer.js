import { Box, Grid } from "@mui/material";
import React from "react";

export default function SiteContainer() {
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      sx={{
        padding: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#09172A",
          borderRadius: "8px",
          minHeight: "100px",
        }}
      >
        Hello
      </Box>
    </Grid>
  );
}
