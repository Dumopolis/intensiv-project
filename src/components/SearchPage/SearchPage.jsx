import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';

import { fetchData } from '../../store/slices/dataSlice';
import { setRadio } from '../../store/slices/searchRequestSlice';

import { useSearchRequestInfo } from '../../hooks/useSearchRequestInfo';
import { useDebounce } from '../../hooks/useDebounce';


export default function Search() {
  const dispatch = useDispatch();
  const searchInfo = useSearchRequestInfo();

  const changeRadio = (e) => {
    dispatch(setRadio({ keywords: e.target.value }));
  };

  const makeRequest = useDebounce(()=>dispatch(fetchData(searchInfo)),300);

  useEffect(()=>{
    dispatch(fetchData(searchInfo));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant='h2' marginBottom={4} textAlign={'center'}>
          UNIVERSE SEARCH
        </Typography>
        <FormControl sx={{ flexDirection: "row" }} fullWidth value={searchInfo} onChange={makeRequest}>
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
      <Cards />
    </>
  );
}
