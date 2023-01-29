import React from "react";
import Button from "@mui/material/Button";

type props = {
  onClickButton: () => void;
  textButton: string;
  style?: {}
};

const CustomButton = ({ onClickButton, textButton, style }: props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: "var(--s2-color)",
        color: "var(--p7-color)",
        fontFamily: "var(--font-title)",
        fontWeight: "bold",
        fontSize: "24px",
        boxShadow: "none",
      }}
      onClick={onClickButton}
      size="large"
      style={style}
    >
      {textButton}
    </Button>
  );
};

export default CustomButton;
