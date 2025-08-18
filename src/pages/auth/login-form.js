import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  const label = { inputProps: { "aria-label": "remember me" } };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack textAlign={"center"} spacing={2} p={4} >
        <Typography align="left" component="h1" variant="h4" fontWeight="bold">
          Welcome back to Pretty Login
        </Typography>
        <Typography align="left" variant="body2">
          It&apos;s great to have you back!
        </Typography>

        <Typography align="left" variant="caption" sx={{ fontWeight: "bold" }}>
          Username
        </Typography>
        <TextField
          {...register("username", { required: true })}
          size="small"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ mt: 0.5, mb: 2 }}
        />
        <Typography align="left" variant="caption" sx={{ fontWeight: "bold" }}>
          Password
        </Typography>
        <TextField
          {...register("password", { required: true })}
          size="small"
          variant="outlined"
          fullWidth
          type="password"
          sx={{ mt: 0.5, mb: 2 }}
        />

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <FormControlLabel
            control={<Checkbox {...label} color="success" />}
            label="Remember me ?"
          />
          <Link href="#" underline="hover" variant="body2">
            Forgot password?
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          textAlign={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Button
            variant="contained"
            type="submit"
            size={"small"}
            color="success"
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            type="submit"
            size={"small"}
            color="success"
          >
            create account
          </Button>
        </Stack>
        <Divider sx={{ my: 3 }}>Or login with</Divider>
        <Stack
          spacing={2}
          justifyContent={"center"}
          textAlign={"center"}
          direction={"row"}
        >
          <FaFacebook />
          <FaGoogle />
        </Stack>
      </Stack>
    </form>
  );
}
