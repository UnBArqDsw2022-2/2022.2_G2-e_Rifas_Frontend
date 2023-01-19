import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={2}>
      <AppBar position="static">
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
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Comece já
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
