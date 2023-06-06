import React from 'react';

import { Typography } from '@mui/material';

import { useUser } from '../../hooks/useUser';
import FavoriteCard from '../FavoriteCard/FavoriteCard';

export default function Favorites() {
  const { favorites } = useUser();

  if (favorites.length) {

    return (
      <>
        <Typography
          variant='h2'
          textAlign='center'
          sx={{
            paddingTop: 5,
            fontSize: '4rem'
          }}>
          FAVORITES
        </Typography>
        <div className='cards__container'>
          {favorites.map((favoriteItem) => <FavoriteCard key={favoriteItem} id={favoriteItem} />
          )}
        </div>
      </>
    );
  }
  return (
    <Typography variant='h2' textAlign={"center"} padding={5}>
        You don`t have favorites yet.
    </Typography>
);
}
