import React from 'react'

import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const moment = require('moment')

const descriptionFormat = (description) => {
    const sliceDescription = description.slice(0, 120);
    const lastSpace = sliceDescription.lastIndexOf(' ');
    const finishDescription = sliceDescription.slice(0, lastSpace) + '...';
    return finishDescription;
}

export default function CardComponent({ date, explanation, title, urlImg }) {

    const description =  descriptionFormat(explanation)

    const formatDate = moment(date).format("DD MMM YYYY")

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
                    {formatDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
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
    )
}
