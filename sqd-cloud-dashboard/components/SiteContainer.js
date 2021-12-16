import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
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
          padding: "16px",
          border: "1px solid #A4ACC4",
          cursor: "pointer",
        }}
      >
        <Typography variant="body">react-sticky-notes</Typography>
        <Typography
          variant="subtitle2"
          sx={{
            paddingTop: "8px",
            paddingBottom: "16px",
          }}
        >
          react-sticky-notes-seven.sqdcloud.app
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Image src={"/images/sticky-notes.png"} width={160} height={90} />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "20px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                marginRight: "6px",
              }}
            >
              Deploys from
            </Typography>
            <Image src={"/images/github.png"} width={16} height={16} />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
