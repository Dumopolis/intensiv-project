import React from 'react';

import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { formatDate, formatDescription } from '../../dataFormating/dataFormating';


export default function CardComponent({ date, description, title, urlImg }) {

    const descriptionFormated = formatDescription(description);

    const dateFormated = formatDate(date);

    return (
        <Card sx={{
            maxWidth: 345,
            margin: 2,
        }}>
            <CardHeader title={title}
                sx={{
                    minHeight: 90,
                    textAlign: 'center'
                }}
            />

            <CardMedia
                component="img"
                height="200"
                image={urlImg}
                alt={title} />

            <CardContent>
                <Typography variant="body1" color="text.secondary" >
                    {dateFormated}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descriptionFormated}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <Button size="normal" color='secondary'>Learn More</Button>
                <IconButton aria-label="add to favorites" sx={{
                    marginLeft: 'auto',
                }}>
                    <FavoriteIcon />
                </IconButton>

            </CardActions>




        </Card>
    );
}
