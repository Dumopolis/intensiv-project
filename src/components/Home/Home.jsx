import React from 'react';

import { Typography } from '@mui/material';

import { useGetMainNewsQuery } from '../../store/slices/nasaApi';

import Cards from '../Cards/Cards';


export default function Home() {

  const nasaNews = useGetMainNewsQuery();
  console.log(nasaNews);
  return (
    <>
      <Typography
        variant='h1'
        textAlign='center'
        sx={{
          paddingTop: 5,
          fontSize: '4rem'
        }}>
        I WANT TO BELIEVE
      </Typography>
      <Cards {...nasaNews} />
    </>
  );
}
