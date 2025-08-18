import { Grid, Paper, Stack } from "@mui/material";
import React from "react";
import LoginForm from "../login-form";
import LoginRegisterLeftSide from "../login-register-left-side";
// import { create } from 'zustand'

export default function LoginView() {
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
            <LoginForm />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <LoginRegisterLeftSide />
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}
