import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Layout } from "../components/layout";
import { Box } from "@mui/system";
import Image from "next/image";
import { useCreateWPMutation } from "../app/services/api";
import { useRouter } from "next/router";

export default function createWordpress() {
  const router = useRouter();
  const [createWp, { isLoading }] = useCreateWPMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.wordpressname.value;
    const createWPResponse = await createWp(name).unwrap();
    if (createWPResponse) {
      router.push("/wordpress");
    }
  };

  return (
    <Layout>
      {/* <Container
      sx={{
        backgroundColor: '#3A557F',
        borderRadius: '12px',
        minHeight: '100px',
        margin: '32px auto',
        width: '100%',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
      }}
    > */}
      <Typography
        variant="h5"
        sx={{
          paddingTop: "16px",
        }}
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
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="wordpressname"
          name="wordpressname"
          autoFocus
          variant="outlined"
          sx={{
            padding: "0",
            marginBottom: "40px",
            width: "40%",
          }}
        />
        <Button
          size="large"
          type="submit"
          fullWidth
          variant="outlined"
          disabled={isLoading}
          sx={{
            padding: "10px",
            marginBottom: "40px",
          }}
        >
          Create wordpress site
        </Button>
      </Box>
    </Layout>
  );
}
