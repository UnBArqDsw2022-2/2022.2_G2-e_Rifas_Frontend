import React from "react";
import Box from "@mui/material/Box";

type props = {
  title: string;
  subTitle?: string;
};

const Title = ({ title, subTitle }: props) => {
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

        {subTitle ? (
          <p
          style={{
            fontFamily: "var(--font-title)",
            fontSize: "18px",
            fontWeight: "bold",
            color: "var(--p4-color)",
          }}
        >
          <span style={{ color: "var(--s1-color)", fontSize: "24px" }}>
            •{" "}
          </span>
          {subTitle}
        </p>
        ) : (
          <></>
        )}
        
    </Box>
  );
};

export default Title;
