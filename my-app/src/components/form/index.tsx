import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CustomButton from "../button";
import CustomInput from "../input";

type props = {
  onClickButton: () => void;
  textButton: string;
  title: string;
  subTitle: string;
  name?: string;
};

const Form = ({ title, subTitle, onClickButton, textButton, name }: props) => {
  return (
    <div>
      <Box width="50%" alignItems={"flex-end"}>
        <Box display={"flex"} flexDirection={"column"} borderRight="1px solid">
          <Box m={1}>
            <h1
              style={{
                color: "var(--p7-color)",
                fontFamily: "var(--font-title)",
              }}
            >
              {title}
            </h1>

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
          </Box>
          <Box
            component="form"
            m={1}
            noValidate
            autoComplete="off"
            width={"520px"}
          >
            {name ? (
              <CustomInput inputName="Nome" placeholder="Informe seu nome" />
            ) : (
              <></>
            )}
            <CustomInput
              inputName="E-mail"
              placeholder="Entre com seu e-mail"
            />
            <CustomInput inputName="Senha" placeholder="•••••••" />

            <p style={{ textAlign: "right" }}>
              <Link
                fontSize="18px"
                fontFamily="var(--font-text)"
                href="#"
                style={{ textDecoration: "none", color: "var(--p4-color)" }}
              >
                Esqueci minha senha
              </Link>
            </p>

            <CustomButton
              onClickButton={onClickButton}
              textButton={textButton}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
