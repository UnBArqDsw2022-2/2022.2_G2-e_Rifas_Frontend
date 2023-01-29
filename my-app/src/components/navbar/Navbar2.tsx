import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import { Container, Link } from '@mui/material'
import { useKeycloak } from '@react-keycloak/web'

export default function ButtonAppBar() {
  const { keycloak } = useKeycloak()
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={2}>
      <AppBar position="static">
        <Container maxWidth={'xl'}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                underline="none"
                color="inherit"
                component={RouterLink}
                to="/"
              >
                Logo
              </Link>
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                keycloak.login()
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                keycloak.register()
              }}
            >
              Comece já
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
