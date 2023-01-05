import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../navbar";

const Form = () => {
  return (
    <div>
      <Navbar />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Box bgcolor={"rgba(23, 114, 160, 0.4)"}>
          <TextField
            id="outlined-basic"
            label="Entre com seu e-mail"
            variant="outlined"
            style={{
              backgroundColor: "var(--c1-color)",
            }}
          />
        </Box>

        <TextField
          id="outlined-basic"
          type="password"
          autoComplete="current-password"
          label="Standard"
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default Form;
