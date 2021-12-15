import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { Layout } from "../components/layout";

export default function createWordpress() {
  return (
    <Layout>
      <Container
        sx={{
          width: "98%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          // sx={{
          //   paddingTop: "16px",
          //   paddingLeft: "12px",
          // }}
        >
          New Wordpress Site
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              opacity: "0.8",
            }}
          >
            <Image src={"/images/wordpress.svg"} width={50} height={50} />
          </Box>
          <Box
            sx={{
              marginLeft: "10px",
            }}
          >
            <Typography variant="h6">WordPress</Typography>
            <Typography variant="subtitle2">by SquareCloud</Typography>
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{
            paddingTop: "24px",
            paddingBottom: "16px",
          }}
        >
          Choose site name
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
          Create Wordpress Site
        </Button>
      </Container>
    </Layout>
  );
}
