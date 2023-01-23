import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type props = {
  inputName: string;
};

const CustomTextArea = ({ inputName }: props) => {
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
      <Box width={"520px"}>
        <textarea
          style={{
            resize: 'none',
            width: '96.51%',
            height: '172px',
            borderRadius: '8px',
            backgroundColor: 'rgba(23, 114, 160, 0.4)',
            padding: '8px'
          }}
        />
      </Box>
    </>
  );
};

export default CustomTextArea;
