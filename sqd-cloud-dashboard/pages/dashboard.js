import React from "react";
import { Container, Typography } from "@mui/material";
import SqdNavbar from "../components/sqdNavbar";
export default function Dashboard() {
  return (
    <>
      <SqdNavbar />
      <Typography variant="h4">Welcome back</Typography>
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
        Dashboard
      </Container>
    </>
  );
}
