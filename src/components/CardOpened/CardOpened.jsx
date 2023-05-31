import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Container, Grid, Typography } from "@mui/material";

import { useGetOneNewsQuery } from "../../store/slices/nasaApi";
import { setOpenedCardHistory } from "../../store/slices/userSlice";

import { formatDate, formatDescription, transformDataObject } from "../../formating/formating";

import { useUser } from "../../hooks/useUser";
import { useDebounce } from "../../hooks/useDebounce";

export default function CardOpened() {
    const { id } = useParams();

    const { data, isSuccess, isLoading, error } = useGetOneNewsQuery(id);

    const user = useUser();
    const dispatch = useDispatch();

    const saveHistory = useDebounce(() => dispatch(setOpenedCardHistory({ id, date: new Date().toJSON() })));
    useEffect(() => {
        saveHistory();
    }, [saveHistory]);

    useEffect(() => {
        localStorage.setItem(user.uid, JSON.stringify(user));
    }, [user]);

    if (isSuccess) {

        const { urlImg, title, description, date, keywords, creator } = transformDataObject(data.collection.items[0]);
        const dateFormated = formatDate(date);
        const descriptionFormated = formatDescription(description);

        return (
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
                <Typography variant="h3" sx={{ marginBottom: 3 }}>
                    {title}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={7} >
                        <img src={urlImg} alt={title} />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            {dateFormated}
                        </Typography>
                        <Typography variant="subtitle1">
                            {creator && "Creator: " + creator}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>

                        {keywords && keywords[0].split(' ').map((word) => <Typography key={word} variant="subtitle1">&#128204; {word}</Typography>)}
                    </Grid>

                    <Grid item >
                        <Typography variant="p">{descriptionFormated}</Typography>
                    </Grid>
                </Grid>
            </Container>

        );
    } else if (error) {

        return <h2>{error}</h2>;

    } else if (isLoading) {

        return <h2>Loading...</h2>;
    }

};

