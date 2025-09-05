import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { RxEyeClosed } from "react-icons/rx";
import { IoMdArrowBack } from "react-icons/io";
import { routes } from "../../routes/Routes";

export default function CrAcount() {
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

  const label = { inputProps: { "aria-label": "remember me" } };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Stack direction={"column"} textAlign={"center"} spacing={1} p={4}>

          <Button size="large" variant="outlined" sx={{ width:10 , mt: 0.25, mb: 1 }} onClick={()=>{Navigation(routes.LoginPage.path)}}>
            <IoMdArrowBack />
          </Button>
        
        <Typography align="left" component="h1" variant="h4" fontWeight="bold">
          let sign you up shall we
        </Typography>
        <Typography align="left" variant="body2">
          it&apos;s great that you want to sign up for us
        </Typography>

        <Typography variant="caption" align="left" sx={{ fontWeight: "bold" }}>
          firstname
        </Typography>
        <TextField
          {...register("firstname", { required: true })}
          size="small"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ mt: 0.25, mb: 1 }}
        />
        {errors.firstname && (
          <Typography align="left" color="error">
            this field is required
          </Typography>
        )}

        <Typography variant="caption" align="left" sx={{ fontWeight: "bold" }}>
          lastname
        </Typography>
        <TextField
          {...register("lastname", { required: true })}
          size="small"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ mt: 0.25, mb: 1 }}
        />
        {errors.lastname && (
          <Typography align="left" color="error">
            this field is required
          </Typography>
        )}

                <Typography variant="caption" align="left" sx={{ fontWeight: "bold" }}>
          username
        </Typography>
        <TextField
          {...register("username", { required: true })}
          size="small"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ mt: 0.25, mb: 1 }}
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
          sx={{ mt: 0.25, mb: 1 }}
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

        <Typography align="left" variant="caption" sx={{ fontWeight: "bold" }}>
          repeat password
        </Typography>
        <TextField
          {...register("rePassword", { required: true })}
          size="small"
          variant="outlined"
          fullWidth
          type={"password"}
          sx={{ mt: 0.25, mb: 1 }}
        />
        {errors.rePassword && (
          <Typography align="left" color="error">
            this field is required
          </Typography>
        )}
        <Typography variant="caption" align="left" sx={{ fontWeight: "bold" }}>
          Email
        </Typography>
        <TextField
          {...register("Email", { required: true })}
          size="small"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ mt: 0.25, mb: 1 }}
        />
        {errors.Email && (
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
            label="I agree to Terms & Privacy"
          />
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
            size={"medium"}
            color="success"
            sx={{ width: "100%" }}
          >
            create Account
          </Button>
        </Stack>
        <Divider sx={{ my: 2 }}>Or login with</Divider>
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
