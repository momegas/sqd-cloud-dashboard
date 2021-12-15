import { Container, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingTop: "16px",
          paddingLeft: "12px",
        }}
      >
        Create database cluster
      </Typography>
      <Container
        sx={{
          width: "98%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "20px 0",
          }}
        >
          Choose database engine
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              border: "1px solid #CFD9F7",
              cursor: "pointer",
            }}
          >
            <Image src={"/images/postgresql.svg"} width={50} height={50} />
            <Typography variant="subtitle1" marginTop={"8px"}>
              PostgreSQL
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "150px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              border: "1px solid #CFD9F7",
              cursor: "pointer",
            }}
          >
            <Image src={"/images/mysql.svg"} width={50} height={50} />
            <Typography variant="subtitle1" marginTop={"8px"}>
              MySQL
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "150px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              border: "1px solid #CFD9F7",
              cursor: "pointer",
            }}
          >
            <Image src={"/images/redis.svg"} width={50} height={50} />
            <Typography variant="subtitle1" marginTop={"8px"}>
              Redis
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{
            paddingTop: "24px",
            paddingBottom: "16px",
          }}
        >
          Choose database cluster name
        </Typography>
        <TextField
          variant="outlined"
          sx={{
            padding: "0",
            marginBottom: "40px",
            width: "40%",
          }}
        />
        <Button
          variant="contained"
          sx={{
            padding: "10px",
            marginBottom: "40px",
          }}
        >
          Create database cluster
        </Button>
      </Container>
    </Container>
  );
}
