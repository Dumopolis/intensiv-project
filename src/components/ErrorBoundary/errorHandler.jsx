import { Container, Typography } from "@mui/material";

export const errorHandler = (error) => {
    return (
        <Container>
            <Typography textAlign={'center'} variant="h2" padding={5}>
                Ooops... Somethig happend 
            </Typography>
            <Typography variant="body1">
                Error: {error}
            </Typography>
        </Container>
    );

};