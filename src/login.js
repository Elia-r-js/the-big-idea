import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import loginImage from "./items/loginp.jpg";
import React from "react";

// import { create } from 'zustand'

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <>
      <Stack>
        <Grid
          container
          component={"main"}
          padding={40}
          sx={{
            height: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Grid
            item
            xs={11}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: "flex",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack alignItems={"center"}>
                <Typography variant="h5" fontFamily={"sans-serif"}>
                  this your store make it from scratch
                </Typography>

                <TextField
                  {...register("username", { require: true })}
                  size="small"
                  variant="outlined"
                  label="username"
                  type="text"
                  placeholder={"username"}
                />
                <TextField
                  {...register("password", { require: true })}
                  size="small"
                  variant="outlined"
                  label="password"
                  type="password"
                  placeholder={"password"}
                />
                <Stack direction={"row"}>
                  <Button variant="contained" type="submit" size={"small"}>
                    Submit
                  </Button>
                  <a href="/password-reset">Forget your password?</a>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              xs={false}
              md={6}
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
