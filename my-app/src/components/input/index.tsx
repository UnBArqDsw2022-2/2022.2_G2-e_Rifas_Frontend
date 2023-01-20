import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type props = {
  inputName: string;
  placeholder: string;
};

const CustomInput = ({ inputName, placeholder }: props) => {
  return (
    <>
      <p
        style={{
          fontFamily: "var(--font-title)",
          fontWeight: "bold",
          color: "var(--p6-color)",
          fontSize: "24px",
        }}
      >
        {inputName}
      </p>
      <Box bgcolor={"rgba(23, 114, 160, 0.4)"} width={"520px"}>
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder={placeholder}
          variant="outlined"
          sx={{
            borderRadius: "8px",
          }}
        />
      </Box>
    </>
  );
};

export default CustomInput;
