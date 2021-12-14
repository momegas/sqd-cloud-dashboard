import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
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
          <Typography variant="h5">Sites</Typography>
          <Button variant="contained">New Site</Button>
        </Box>
      </Container>
    </>
  );
}
