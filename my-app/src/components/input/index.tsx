import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type props = {
  onChange?: (event:any) => void;
  inputName: string;
  placeholder?: string;
  type?: string;
  multiple?: boolean;
};

const CustomInput = ({ onChange, inputName, placeholder, type='text', multiple=false}: props) => {
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
          type = {type}
          inputProps={{multiple: multiple}}
          onChange={onChange}
        />
      </Box>
    </>
  );
};

export default CustomInput;
