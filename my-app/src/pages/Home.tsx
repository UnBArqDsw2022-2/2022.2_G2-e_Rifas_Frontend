import React, { useContext } from "react";
import ToastyContext, { ToastyContextType } from "src/context/ToastyContext";
import Form from "src/components/form";

import api from "src/api/index";

const Home = () => {
  const { showToast } = useContext(ToastyContext) as ToastyContextType;

  const loginAction = async () => {
    showToast("Derivada Test", "warning");
    let response = await api.getUser("dhsadbi");
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
