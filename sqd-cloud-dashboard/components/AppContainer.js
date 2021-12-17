import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function SiteContainer({
  stack: { stackName, services },
  onDelete,
}) {
  const appName = stackName;
  const appPort =
    services[0]?.ports[0]?.hostPort || services[1]?.ports[0]?.hostPort;
  const appLink = `http://cluster1.squaredev.io:${appPort}`;

  console.log(appLink);

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
          padding: "16px",
          border: "1px solid #A4ACC4",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              opacity: "0.8",
              borderRadius: "50%",
            }}
          >
            <Image src={"/images/wordpress.svg"} width={30} height={30} />
          </Box>
          <Typography
            variant="body"
            sx={{
              fontSize: "20px",
              marginLeft: "10px",
            }}
          >
            {appName}
          </Typography>
        </Box>
        <a href={appLink} target="_blank">
          <Typography
            variant="subtitle2"
            sx={{
              paddingTop: "10px",
              paddingBottom: "6px",
              opacity: "0.8",
            }}
          >
            {`${appName}.cluster.squaredev.io`}
          </Typography>
        </a>
        <IconButton
          aria-label="delete"
          onClick={() => onDelete(appName)}
          sx={{
            fontSize: "20px",
            opacity: "0.6",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          <DeleteIcon
            sx={{
              fontSize: "20px",
            }}
          />
        </IconButton>
      </Box>
    </Grid>
  );
}
