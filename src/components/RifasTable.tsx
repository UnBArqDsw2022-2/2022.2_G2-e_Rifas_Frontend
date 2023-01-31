import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import RifaService from '../api/services/rifa.service'
import Rifa from '../api/models/rifa.model'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'

//function createRifa(
//  id: number,
//  nome: string,
//  status: string,
//  maximoBilhetes: string,
//  descricao: string
//) {
//  return { id, nome, status, maximoBilhetes, descricao }
//}

//const rows = [
//  createData('Nome', 159, 6.0, 24, 4.0),
//  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//  createData('Eclair', 262, 16.0, 24, 6.0),
//  createData('Cupcake', 305, 3.7, 67, 4.3),
//  createData('Gingerbread', 356, 16.0, 49, 3.9),
//]

export default function RifasTable() {
  const [rifas, setRifas] = React.useState<Rifa[]>()
  React.useEffect(() => {
    const rifaService = new RifaService()
    rifaService.getAllRifas().then((res) => {
      setRifas(res?.data)
    })
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Qtd. de Bilhetes</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Validar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rifas &&
            rifas.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.maximoBilhetes}</TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                <TableCell align="right">
                  <Link to={`/rifa/validate/${row.id}`}>
                    <Button>
                      <EditIcon />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
