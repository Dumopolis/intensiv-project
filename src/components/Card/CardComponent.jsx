import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TelegramIcon from '@mui/icons-material/Telegram';

import { FeatureFlagContext } from '../../context/context';

import { showAlert } from '../../store/slices/alertSlice';
import { formatDate, formatForLenght } from '../../formating/formating';
import { useAuth } from '../../hooks/useAuth';
import { useFavoriteManipulator } from '../../hooks/useFavoriteManipulator';


function CardComponent({ date, description, title, urlImg, id }) {

    const descriptionFormated = formatForLenght(description, 150);
    const titleFormated = formatForLenght(title, 50);
    const dateFormated = formatDate(date);

    const { isAuth } = useAuth();
    const { setFavoriteFromLocalStorage, toggleToFavorites, iconState } = useFavoriteManipulator(id);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isTelegramShareEnabled } = useContext(FeatureFlagContext);

    const tryToOpen = () => {
        if (isAuth) {
            navigate(`/news/${id}`);
        } else {
            dispatch(
                showAlert({
                    severity: "info",
                    title: "Sorry... You can`t open card",
                    text: `If you want open card, you need authenticate or registration`,
                })
            );
        }

    };

    useEffect(() => {
        setFavoriteFromLocalStorage();
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
                <Button size="normal" onClick={tryToOpen} color='secondary'>Learn More</Button>
                <IconButton aria-label="add to favorites" color={iconState} onClick={toggleToFavorites} sx={{
                    marginLeft: 'auto',
                }}>
                    <FavoriteIcon />
                </IconButton>
                {isTelegramShareEnabled &&
                    <IconButton href={`https://t.me/share/url?url=https://images.nasa.gov/details/${id}`} aria-label="share on telegram" >
                        <TelegramIcon />
                    </IconButton>
                }
            </CardActions>
        </Card>
    );
}

CardComponent.propTypes = {
    date: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    urlImg: PropTypes.string,
    id: PropTypes.string,
};

export default CardComponent;