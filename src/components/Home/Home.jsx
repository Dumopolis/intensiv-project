import React from 'react'

import Cards from '../Cards/Cards'

import { Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Typography
        variant='h1'
        textAlign='center'
        sx={{
          paddingTop: 5,
          fontSize: '4rem'
        }}>
        I want to believe
      </Typography>
      <Cards />
    </>
  )
}
