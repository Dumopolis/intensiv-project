import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { formatDate, formatForLenght } from '../../formating/formating';
import { useAuth } from '../../hooks/useAuth';
import { useFavoriteManipulator } from '../../hooks/useFavoriteManipulator';


export default function CardComponent({ date, description, title, urlImg, id }) {
    
    const descriptionFormated = formatForLenght(description, 150);

    const titleFormated = formatForLenght(title, 50);

    const dateFormated = formatDate(date);

    const { isAuth } = useAuth();

    const {getFavoriteLocalStorage, toggleToFavorites, iconState} = useFavoriteManipulator(id);

    useEffect(() => {
        getFavoriteLocalStorage();
        // eslint-disable-next-line
    }, [isAuth]);

    return (
        <Card sx={{
            width: 345,
            margin: 2,
        }}>
            <CardHeader title={titleFormated}
                sx={{
                    minHeight: 95,
                    textAlign: 'center'
                }}
            />

            <CardMedia
                component="img"
                height="200"
                image={urlImg}
                alt={title} />

            <CardContent sx={{
                minHeight: 120,
            }}>
                <Typography variant="body1" color="text.secondary" >
                    {dateFormated}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descriptionFormated}
                </Typography>
            </CardContent>

            <CardActions disableSpacing >
                <Button size="normal" color='secondary'>Learn More</Button>
                <IconButton aria-label="add to favorites" color={iconState} onClick={toggleToFavorites} sx={{
                    marginLeft: 'auto',
                }}>
                    <FavoriteIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}
