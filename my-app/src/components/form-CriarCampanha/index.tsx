import React, { useState } from "react";
import Box from "@mui/material/Box";
import CustomButton from "../button";
import CustomInput from "../input";
import Title from "../title";
import CustomTextArea from "../text-area";
import CustomSelect from "../select";

type props = {
  onClickButton: () => void;
  textButton: string;
  title: string;
  name?: string;
};

const FormCriarCampanha = ({ title, onClickButton, textButton }: props) => {

  const options = [
    { value: 'acessorios', label: 'Acessórios' },
    { value: 'roupas', label: 'Roupas' },
    { value: 'eletronicos', label: 'Eletrônicos' },
    { value: 'brinquedos', label: 'Brinquedos' },
    { value: 'saude', label: 'Saúde e Beleza' },
    { value: 'ferramentas', label: 'Ferramentas' },
    { value: 'decoracao', label: 'Decoração' },
    { value: 'animais', label: 'Produtos para animais' },
  ]

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
                    <CustomSelect inputName="Categoria da Rifa" options={options}/>
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
