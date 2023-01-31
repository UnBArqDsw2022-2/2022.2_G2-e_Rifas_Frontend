import React, { useState } from 'react'
import Box from '@mui/material/Box'
import CustomButton from '../button'
import CustomInput from '../input'
import Title from '../title'
import CustomTextArea from '../text-area'
import CustomSelect from '../select'
import Rifa from '../../api/models/rifa.model'

type props = {
  onClickButton: (rifa: Rifa) => void
  textButton: string
  title: string
  name?: string
}

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
  const [nome, setNome] = useState('')
  const [maximoBilhetes, setMaximoBilhetes] = useState(0)
  const [preco, setPreco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleImageChange = (event: any) => {
    setImages(event.target.file)
  }

  const handleFormValues = () => {
    onClickButton({
      nome: nome,
      maximoBilhetes: maximoBilhetes,
      status: 'EM_ANALISE',
      descricao: descricao,
    })
  }

  return (
    <div>
      <Title title={title}></Title>
      <Box display={'flex'} flexDirection={'row'}>
        <Box width="50%" alignItems={'flex-end'}>
          <Box display={'flex'} flexDirection={'column'}>
            <Box
              component="form"
              m={1}
              noValidate
              autoComplete="off"
              width={'520px'}
            >
              <CustomInput
                inputValue={nome}
                onChange={(e) => setNome(e.target.value)}
                inputName="Nome da Rifa"
              />
              <CustomInput
                inputValue={maximoBilhetes}
                onChange={(e) => setMaximoBilhetes(e.target.value)}
                inputName="Quantidade de Bilhetes"
                type="number"
              />
              <CustomSelect inputName="Categoria da Rifa" options={options} />
              <CustomInput
                inputValue={preco}
                onChange={(e) => setPreco(e.target.value)}
                inputName="Preço do Bilhete"
                type="tel"
              />
            </Box>
          </Box>
        </Box>
        <Box width="50%" alignItems={'flex-start'}>
          <Box display={'flex'} flexDirection={'column'}>
            <Box
              component="form"
              m={1}
              noValidate
              autoComplete="off"
              width={'520px'}
            >
              <CustomInput
                inputValue={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                inputName="Telefone para Suporte"
                type="tel"
              />
              <CustomInput
                inputName="Imagens"
                type="file"
                onChange={handleImageChange}
                multiple={true}
              />
              <CustomTextArea
                inputValue={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                inputName="Descrição"
              />
              <Box
                width="100%"
                marginTop={2}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <CustomButton
                  style={{
                    width: '150px',
                  }}
                  onClickButton={handleFormValues}
                  textButton={textButton}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default FormCriarCampanha
