import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CustomButton from "../button";
import CustomInput from "../input";
import Title from "../title";
import CustomTextArea from "../text-area";
import { TextField } from "@mui/material";

type props = {
  onClickButton: () => void;
  textButton: string;
  title: string;
  name?: string;
};

const FormCriarCampanha = ({ title, onClickButton, textButton }: props) => {

  const [images, setImages] = useState([])

  const handleImageChange = (event:any) => {
    setImages(event.target.file)
  }

  return (
    <div>
        <Title title={title}></Title>
        <Box display={"flex"} flexDirection={"row"}>
            <Box width="50%" alignItems={"flex-end"}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Box
                    component="form"
                    m={1}
                    noValidate
                    autoComplete="off"
                    width={"520px"}
                  >
                    <CustomInput inputName="Nome da Rifa" />
                    <CustomInput inputName="Quantidade de Bilhetes" type="number" />
                    <CustomInput inputName="Categoria da Rifa" />
                    <CustomInput inputName="Preço do Bilhete" type="tel" />
                  
                  </Box>
                </Box>
            </Box>
            <Box width="50%" alignItems={"flex-start"}>
                <Box display={"flex"} flexDirection={"column"}>
                    <Box
                        component="form"
                        m={1}
                        noValidate
                        autoComplete="off"
                        width={"520px"}
                    >
                    <CustomInput inputName="Telefone para Suporte" type="tel"/>
                    <CustomInput 
                      inputName="Imagens" 
                      type="file" 
                      onChange={handleImageChange}
                      multiple={true}/>
                    <CustomTextArea inputName="Descrição" />
                    <Box width="100%" marginTop={2} style={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}>
                      <CustomButton
                          style={{
                            width: '150px',
                          }}
                          onClickButton={onClickButton}
                          textButton={textButton}
                      />
                    </Box>
                  </Box>
                </Box>
            </Box>
        </Box>
        
    </div>
  );
};

export default FormCriarCampanha;
