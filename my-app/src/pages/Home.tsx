import React, { useContext } from "react";
import ToastyContext, { ToastyContextType } from "../context/ToastyContext";
import Form from "../components/form";

const Home = () => {
  const { showToast } = useContext(ToastyContext) as ToastyContextType;

  const loginAction = () => {
    showToast("Error Test", "error");
    showToast("Info Test", "info");
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
