import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

import { useDispatch } from 'react-redux';

import { fetchData } from '../../store/slices/dataSlice';
import { setInput } from '../../store/slices/searchRequestSlice';
import { showAlert } from '../../store/slices/alertSlice';
import { useSearchRequestInfo } from '../../hooks/useSearchRequestInfo';
import { useAuth } from '../../hooks/useAuth';

import { Search, SearchIconWrapper, StyledInputBase } from './styleForSearchBar';


export default function SearchBar() {

  const searchInfo = useSearchRequestInfo();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const changeInputValue = (e) => {
    dispatch(setInput({ request: e.target.value }));
  };

  const tryToSearch = (e) => {
    if (e.code === 'Enter') {
      if (isAuth) {
        navigate('/search');
        dispatch(fetchData(searchInfo));
      } else {
        dispatch(showAlert({
          severity: "error",
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
        onKeyDown={tryToSearch}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={changeInputValue}
        value={searchInfo.request}
      />
    </Search>
  );
}
