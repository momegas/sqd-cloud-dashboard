import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Databases() {
  return (
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
      <Typography
        variant="h5"
        sx={{
          marginBottom: "40px",
        }}
      >
        Create database cluster
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            minHeight: "150px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
            border: "1px solid #CFD9F7",
            cursor: "pointer",
          }}
        >
          PostgreSQL
        </Box>
        <Box
          sx={{
            minHeight: "150px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
            border: "1px solid #CFD9F7",
            cursor: "pointer",
          }}
        >
          MySQL
        </Box>
        <Box
          sx={{
            minHeight: "150px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "20px",
            border: "1px solid #CFD9F7",
            cursor: "pointer",
          }}
        >
          Redis
        </Box>
      </Box>
    </Container>
  );
}
