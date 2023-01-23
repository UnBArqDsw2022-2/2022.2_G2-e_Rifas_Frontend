import React from "react";
import Box from "@mui/material/Box";

type props = {
  title: string;
};

const Title = ({ title }: props) => {
  return (
    <Box m={1}>
        <h1
          style={{
            color: "var(--p7-color)",
            fontFamily: "var(--font-title)",
          }}
        >
          {title}
        </h1>
    </Box>
  );
};

export default Title;
