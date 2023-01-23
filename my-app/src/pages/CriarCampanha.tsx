import React from "react";
import FormCriarCampanha from "../components/form-CriarCampanha";

const CriarCampanha = () => {
    const criarAction = () => {
        console.log("Criar action");
      };

    return (
    <FormCriarCampanha
        onClickButton={() => {
          criarAction();
        }}
        title="Criar Campanha"
        textButton="Salvar"
      />
  );
};

export default CriarCampanha;
