import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { FeatureFlagContext } from "../../context/context";

import { useGetOneNewsQuery } from "../../store/slices/nasaApi";
import { setOpenedCardHistory } from "../../store/slices/userSlice";

import { formatDate, formatDescription } from "../../formating/formating";

import { useUser } from "../../hooks/useUser";
import { useDebounce } from "../../hooks/useDebounce";
import { useFavoriteManipulator } from "../../hooks/useFavoriteManipulator";
import Loader from "../Loader/Loader";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

export default function CardOpened() {
    const { id } = useParams();
    const { data, isSuccess, isLoading, error } = useGetOneNewsQuery(id);

    const { setFavoriteFromLocalStorage, toggleToFavorites, iconState } = useFavoriteManipulator(id);
    const user = useUser();

    const dispatch = useDispatch();
    const saveHistory = useDebounce(() => dispatch(setOpenedCardHistory({ id, date: new Date().toJSON() })));

    const { isTelegramShareEnabled } = useContext(FeatureFlagContext);


    useEffect(() => {
        saveHistory();
    }, [saveHistory]);

    useEffect(() => {
        localStorage.setItem(user.uid, JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        setFavoriteFromLocalStorage();
        // eslint-disable-next-line
    }, [user]);

    if (isSuccess) {
        const { urlImg, title, description, date, keywords, creator } = data;
        const dateFormated = formatDate(date);
        const descriptionFormated = formatDescription(description);

        return (
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
                <Typography variant="h3" sx={{ marginBottom: 3 }}>
                    {title}
                </Typography>
                <Grid container columnSpacing={5}>
                    <Grid item xs={7} >
                        <img src={urlImg} alt={title} />
                    </Grid>
                    <Grid container item xs={3} direction='column' justifyContent='space-between'>
                        <Grid item >
                            <Typography variant="subtitle1">
                                {dateFormated}
                            </Typography>
                            <Typography variant="subtitle1">
                                {creator && "Creator: " + creator}
                            </Typography>
                        </Grid>
                        <Grid container direction='row' justifyContent='space-between'>

                            <IconButton aria-label="add to favorites" color={iconState} onClick={toggleToFavorites}>
                                <FavoriteIcon />
                            </IconButton>

                            {isTelegramShareEnabled &&
                                <Button href={`https://t.me/share/url?url=https://images.nasa.gov/details/${id}`}>Share on Telegram</Button>
                            }
                        </Grid>

                    </Grid>
                    <Grid item xs={2}>

                        {keywords && keywords[0].split(' ').map((word) => <Typography key={word} variant="subtitle1">&#128204; {word}</Typography>)}
                    </Grid>

                    <Grid item paddingTop={3}>
                        <Typography variant="p">{descriptionFormated}</Typography>

                    </Grid>
                </Grid>
            </Container>

        );
    } else if (error) {
        return <ErrorComponent error={error.error} />;

    } else if (isLoading) {
        return <Loader />;
    }
    return (
        <Typography variant='h2' textAlign={"center"} padding={5}>
            We can`t get news. Try again later
        </Typography>
    );

};

