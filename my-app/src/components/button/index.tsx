import React from "react";
import Button from "@mui/material/Button";

type props = {
  onClickButton: () => void;
  textButton: string;
};

const CustomButton = ({ onClickButton, textButton }: props) => {
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
    >
      {textButton}
    </Button>
  );
};

export default CustomButton;
