import React, { useContext } from "react";
import ToastyContext, { ToastyContextType } from "../context/ToastyContext";
import Form from "../components/form";

import api from "../api";

const Home = () => {
  const { showToast } = useContext(ToastyContext) as ToastyContextType;

  const loginAction = async () => {
    showToast("Error Test", "error");
    showToast("Info Test", "info");
    let response = await api.getUser("ArthurMeloG");
    console.log(response);
  };

  return (
    <div>
      <Form
        onClickButton={() => {
          loginAction();
        }}
        title="Bem vindo de volta!"
        subTitle="Entre com seus dados"
        textButton="Entrar"
      />
    </div>
  );
};

export default Home;
