import React from "react";
import Form from "../components/form";

const Register = () => {
  const registerAction = () => {
    console.log("Register action");
  };

  return (
    <div>
      <Form
      // onClickButton={() => {
      //   registerAction();
      // }}
      // title="Crie sua conta"
      // subTitle="Informe seus dados"
      // textButton="Cadastrar"
      />
    </div>
  );
};

export default Register;
