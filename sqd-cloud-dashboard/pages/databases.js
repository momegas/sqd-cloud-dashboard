import { Container, Typography } from "@mui/material";
import React from "react";

export default function Databases() {
  return (
    <>
      <Typography variant="h5">Create a database cluster</Typography>
      <Container
        sx={{
          width: "100%",
          backgroundColor: "#3A557F",
          borderRadius: "12px",
          minHeight: "100px",
          margin: "32px auto",
          padding: "28px",
        }}
      >
        Databases
      </Container>
    </>
  );
}
