import { Stack } from "@mui/material";
import React from "react";
import signuppic from "../../assets/images/signuppic.jpg";
export default function CrAccountLeftSide() {
  return (
    <Stack>
      <img
        src={signuppic}
        alt="loginImage"
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          maxHeight: "950px",
          height:"100%",
          width: "auto",
        }}
      />
    </Stack>
  );
}
