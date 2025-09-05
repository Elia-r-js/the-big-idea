import {Grid, Paper, Stack } from "@mui/material";
import React from "react";
import CrAcount from "../CrAcount.-form";
import CrAccountLeftSide from "../CrAccount-left-side";
export default function CrAccountView() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Paper
        elevation={7}
        sx={{ borderRadius: 5, maxWidth: 900, width: "100%" }}
      >
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <CrAcount />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CrAccountLeftSide/>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}
