import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { RxEyeClosed } from "react-icons/rx";
import { routes } from "../../routes/Routes";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Navigation = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit = (data) => {
    // after the site create account were complete
    axios
      .post("https://fakestoreapi.com/auth/login", data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  console.log(watch("example"));

  const label = { inputProps: { "aria-label": "remember me" } };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack textAlign={"center"} spacing={2} p={4}>
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
        {errors.username && (
          <Typography align="left" color="error">
            this field is required
          </Typography>
        )}
        <Typography align="left" variant="caption" sx={{ fontWeight: "bold" }}>
          Password
        </Typography>
        <TextField
          {...register("password", { required: true })}
          size="small"
          variant="outlined"
          fullWidth
          type={showPassword ? "text" : "password"}
          sx={{ mt: 0.5, mb: 2 }}
          //برای اینکه بتونیم ویژگی های خاصی مثل افزودن ایکون به text field : the explaintion for InputProps
          InputProps={{
            // بزای اضافه کردن یک چیزی به اخر  متن ورودی
            endAdornment: (
              //برای اضافه کردن چیزی به ابتدا یا انتهای فیلد ورودی هست بدون اینکه ساختارش خراب بشه
              <InputAdornment position="end">
                {/* برای اضافه کرد ایکون هست نه متن مثل همین چشم */}
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {errors.password && (
          <Typography align="left" color="error">
            this field is required
          </Typography>
        )}
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
            type="button"
            size={"small"}
            color="success"
            onClick={() => {
              Navigation(routes.CreateAccountPage.path);
            }}
          >
            create account
          </Button>
        </Stack>
        <Divider sx={{ my: 3 }}>Or login with</Divider>
        <Stack
          spacing={0}
          justifyContent={"center"}
          textAlign={"center"}
          direction={"row"}
          color="success"
        >
          <Button color="success">
            <FaFacebook />
          </Button>
          <Button color="successs">
            <FaGoogle />
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
