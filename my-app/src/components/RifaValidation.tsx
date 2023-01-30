import React, { useEffect, useState } from 'react'
import {
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Paper,
} from '@mui/material'
import Title from './title'
import RifaService from '../api/services/rifa.service'
import Rifa from '../api/models/rifa.model'
import CustomButton from './button'

type Props = {}

const possibleStatus = [
  { status: 'EM_ANALISE', text: 'Manter em análise' },
  { status: 'CANCELADA', text: 'Cancelar' },
  { status: 'FECHADA', text: 'Fechar' },
  { status: 'ABERTA', text: 'Abrir' },
]

const RifaValidation = (props: Props) => {
  const [rifa, setRifa] = useState<Rifa>()
  const [selectedStatus, setSelectedStatus] = useState('')

  async function getRifa() {
    const rifaService = new RifaService()
    await rifaService.getRifa(1).then((res) => {
      setRifa(res?.data)
    })
  }

  async function updateStatus() {
    const rifaService = new RifaService()
    if (rifa?.id == undefined) return
    const id = rifa.id
    switch (selectedStatus) {
      case 'EM_ANALISE':
        await rifaService.analisarRifa(id)
        break
      case 'CANCELADA':
        await rifaService.cancelarRifa(id)
        break
      case 'FECHADA':
        await rifaService.fecharRifa(id)
        break
      case 'ABERTA':
        await rifaService.aprovarRifa(id)
        break
      default:
        break
    }
    getRifa()
  }

  useEffect(() => {
    getRifa()
  }, [])

  function handleSelectChange(event: SelectChangeEvent) {
    setSelectedStatus(event.target.value as string)
  }

  function handleOnClick() {
    updateStatus()
  }

  return (
    <>
      <Title title="Validar rifa"></Title>
      <Paper
        sx={{
          padding: '20px',
        }}
      >
        <Box
          sx={{
            paddingLeft: 1,
          }}
        >
          <Typography>Nome: {rifa?.nome}</Typography>
          <Typography>Status: {rifa?.status}</Typography>
          <Typography>
            Quantidade máxima de bilhetes: {rifa?.maximoBilhetes}
          </Typography>
          <Typography>Descrição: {rifa?.descricao}</Typography>
          <form>
            <FormControl
              sx={{
                minWidth: '200px',
                marginTop: '20px',
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Selecione o status
              </InputLabel>
              <Select
                labelId="status-rifa"
                id="status-rifa"
                value={selectedStatus}
                label="Selecione o status"
                onChange={handleSelectChange}
              >
                {possibleStatus.map((item) => (
                  <MenuItem key={item.status} value={item.status}>
                    {item.text}
                  </MenuItem>
                ))}
              </Select>
              <CustomButton
                style={{
                  marginTop: '20px',
                  width: '300px',
                  fontSize: '15px',
                }}
                onClickButton={handleOnClick}
                textButton="Confirmar estado"
              />
            </FormControl>
          </form>
        </Box>
      </Paper>
    </>
  )
}

export default RifaValidation
