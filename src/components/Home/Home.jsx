import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Typography } from '@mui/material';

import { fetchData } from '../../store/slices/dataSlice';

import Cards from '../Cards/Cards';
import { removeSearch } from '../../store/slices/searchRequestSlice';


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeSearch());
    dispatch(fetchData());
  }, [dispatch]);

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
      <Cards />
    </>
  );
}
