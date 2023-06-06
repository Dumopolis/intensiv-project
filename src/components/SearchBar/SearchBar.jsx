import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

import { useDispatch } from 'react-redux';


import { setRequest } from '../../store/slices/searchSlice';
import { showAlert } from '../../store/slices/alertSlice';
import { useAuth } from '../../hooks/useAuth';
import { useDebounce } from '../../hooks/useDebounce';

import { Search, SearchIconWrapper, StyledInputBase } from './styleForSearchBar';


export default function SearchBar({ value }) {
  const [search, setSearch] = useState(value);

  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const makeRequest = useDebounce(() => (dispatch(setRequest({ request: search }))), 600);

  const changeInputValue = (e) => {
    setSearch(e.target.value);
    makeRequest();
  };

  const tryToSearch = (e) => {
    if (e.code === 'Enter' && pathname !== '/search') {
      if (isAuth) {
        navigate(`/search?request=${search}&keywords=`);
        makeRequest();
      } else {
        dispatch(showAlert({
          severity: "info",
          title: "Sorry... You can`t use search",
          text: `If you want use search, you need authenticate or registration`
        }));
      }
    }
  };


  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        label="Controlled"
        onKeyDown={tryToSearch}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={changeInputValue}
        value={search}
      />
    </Search>
  );
}
