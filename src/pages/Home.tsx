import React, { useContext } from "react";
import ToastyContext, { ToastyContextType } from "src/context/ToastyContext";
import CustomButton from '../components/button'
import Form from "src/components/form";

import api from "src/api/index";
import { Box, fontWeight } from "@mui/system";
import { Link } from "react-router-dom";

const Home = () => {
  const { showToast } = useContext(ToastyContext) as ToastyContextType;

  const loginAction = async () => {
    showToast("Derivada Test", "warning");
    let response = await api.getUser("dhsadbi");
    console.log(response);
  };

  const clickButton = () => {

  }

  return (
    <div>
       <Box m={1}>
        <p
          style={{
            color: "var(--p7-color)",
            fontFamily: "var(--font-title)",
            fontSize: "50px",
            fontWeight: "bold"
          }}
        >
          Crie e compre suas rifas com 
          <span
          style={{
            color: "var(--s2-color)",
            fontFamily: "var(--font-title)",
            fontSize: "50px",
            fontWeight: "bold"
          }}
          > E-Rifas</span> 
        </p>
        <Link to='/criar-campanha'>
          <CustomButton
          textButton="Quero começar"
          style={{
            width:'250px',
            fontSize: "20px",
            marginTop: "2rem",
          }}
          ></CustomButton>
        </Link>
    </Box>
    </div>
  );
};

export default Home;
