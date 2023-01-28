import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import load from '../assets/images/loading.gif'

type Props = {}

const Loading = (props: Props) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h4" marginLeft={2}>
        {' '}
        Loading...
      </Typography>
    </Box>
  )
}

export default Loading
