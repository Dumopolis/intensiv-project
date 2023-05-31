import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';

import { setKeywords, setRequest } from '../../store/slices/searchSlice';

import { useSearchInfo } from '../../hooks/useSearchInfo';
import { useGetSearchNewsQuery } from '../../store/slices/nasaApi';


export default function Search() {
  const dispatch = useDispatch();

  const changeRadio = (e) => {
    dispatch(setKeywords({ keywords: e.target.value }));
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const { keywords: keywordsFromStore, request: requestFromStore } = useSearchInfo(searchParams.get('keywords'));

  const news = useGetSearchNewsQuery({ request: searchParams.get('request'), keywords: searchParams.get('keywords') });


  useEffect(() => {
    setSearchParams({
      request: requestFromStore,
      keywords: keywordsFromStore,
    });
  }, [requestFromStore, keywordsFromStore, searchParams, setSearchParams]);

  useEffect(() => {
  
    dispatch(setKeywords({ keywords: searchParams.get('keywords') || '' }));
    dispatch(setRequest({ request: searchParams.get('request') || '' }));

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container sx={{ paddingTop: 5 }}>
        <Typography variant='h2' marginBottom={4} textAlign={'center'}>
          UNIVERSE SEARCH
        </Typography>
        <FormControl sx={{ flexDirection: "row" }} fullWidth >
          <RadioGroup
            value={searchParams.get('keywords')}
            onChange={changeRadio}
            sx={{ width: "50%" }}
            row
          >
            <FormControlLabel value="MARS" control={<Radio />} label="MARS" />
            <FormControlLabel value="MOON" control={<Radio />} label="MOON" />
            <FormControlLabel value="EARTH" control={<Radio />} label="EARTH" />
            <FormControlLabel value="" control={<Radio />} label="OTHER" />
          </RadioGroup>
          <SearchBar value={searchParams.get('request')} />
        </FormControl>
      </Container>
      <Cards {...news} />
    </>
  );
}
