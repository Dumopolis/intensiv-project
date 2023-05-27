import React from 'react';

import { useDispatch } from 'react-redux';

import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';

import { setKeywords } from '../../store/slices/searchSlice';

import { useSearchInfo } from '../../hooks/useSearchInfo';
import { useGetSearchNewsQuery } from '../../store/slices/nasaApi';


export default function Search() {
  const dispatch = useDispatch();
  const searchInfo = useSearchInfo();

  const changeRadio = (e) => {
    dispatch(setKeywords({ keywords: e.target.value }));
  };
  
  const news = useGetSearchNewsQuery(searchInfo);
  

  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant='h2' marginBottom={4} textAlign={'center'}>
          UNIVERSE SEARCH
        </Typography>
        <FormControl sx={{ flexDirection: "row" }} fullWidth >
          <RadioGroup
            defaultValue=''
            onChange={changeRadio}
            sx={{ width: "50%" }}
            row
          >
            <FormControlLabel value="MARS" control={<Radio />} label="MARS" />
            <FormControlLabel value="MOON" control={<Radio />} label="MOON" />
            <FormControlLabel value="EARTH" control={<Radio />} label="EARTH" />
            <FormControlLabel value="" control={<Radio />} label="OTHER" />
          </RadioGroup>
          <SearchBar />
        </FormControl>
      </Container>
      <Cards {...news}/>
    </>
  );
}
