import React from 'react'
import { 
    Typography,
    AppBar, 
    Toolbar, 
    Grid,
    TextField,
    FormGroup,
    FormControl,
    Button
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

const Login = () => {
  return (
    <>
    <Grid 
    container 
    spacing={2}
    justifyContent="center"
    alignItems="center">
        <Grid item xs={6}>
        <Typography variant='h3'>Bem vindo de volta!</Typography>
        <Typography marginBottom={2}>Entre com seus dados</Typography>
        <form action="">
            <Grid 
            container
            direction="column"
            rowSpacing={2}
            >
                <Grid item>
                    <label htmlFor="email">E-mail</label>
                </Grid>
                <Grid item>
                    <TextField fullWidth required type="text" placeholder='Entre com seu email' />
                </Grid>
                <Grid item>
                    <label required htmlFor="password">Senha</label>
                </Grid>
                <Grid item>
                    <TextField fullWidth type="text" placeholder='Entre com sua senha' />
                </Grid>
                <Grid item>
                    <Button variant="contained" fullWidth>Entrar</Button>
                </Grid>
            </Grid>
        </form>
        </Grid>
    </Grid>
    </>
  )
}

export default Login