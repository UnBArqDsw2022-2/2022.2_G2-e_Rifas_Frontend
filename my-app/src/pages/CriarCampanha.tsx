import Rifa from "../api/models/rifa.model";
import RifaService from "../api/services/rifa.service";
import React from "react";
import FormCriarCampanha from "../components/form-CriarCampanha";

const CriarCampanha = () => {

    const rifaService = new RifaService();

    const criarAction = (rifa: Rifa) => {
        console.log(rifa)
    };

    return (
    <FormCriarCampanha
        onClickButton={criarAction}
        title="Criar Campanha"
        textButton="Salvar"
    />
  );
};

export default CriarCampanha;
