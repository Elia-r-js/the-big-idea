import { Stack } from "@mui/material";
import React from "react";
import loginImg from "../../assets/images/login.jpeg";
export default function LoginRegisterLeftSide() {
  return (
    <Stack>
      <img
        src={loginImg}
        alt="loginImage"
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          maxHeight: "550px",
          width: "auto",
        }}
      />
    </Stack>
  );
}
