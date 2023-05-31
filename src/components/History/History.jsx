import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Grid, Stack, Typography } from '@mui/material';

import { useUser } from '../../hooks/useUser';
import { formatDateWithTime, sortByDate } from '../../formating/formating';

export default function History() {
  const { openedCardHistory, searchHistory } = useUser();

  const cards = Object.entries(openedCardHistory);

  return (
    <Container>

      <Typography variant='h2' paddingTop={5} textAlign='center'>
        HISTORY
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant='h4' padding={5} textAlign='center'>
            Opened Cards
          </Typography>
          {sortByDate(cards, 1).map(([id, date]) => {
            const [formatDate, time] = formatDateWithTime(date);
            return (
              <Stack key={id} direction="row" spacing={2} alignItems='center' paddingBottom={2}>

                <Typography variant='body1' marginRight={15}>
                  {formatDate}<br />
                  {time}
                </Typography>
                <Link to={`/news/${id}`}>News id: {id}</Link>

              </Stack>
            );
          })}

        </Grid>
        <Grid item xs={6}>
          <Typography variant='h4' padding={5} textAlign='center'>
            Search requests
          </Typography>
          {searchHistory.map(([request, keyword, date]) => {
            const [formatDate, time] = formatDateWithTime(date);
            return (
              <Stack key={date} direction="row" spacing={2} alignItems='center' paddingBottom={2}>

                <Typography variant='body1' marginRight={15}>
                  {formatDate}<br />
                  {time}
                </Typography>
                <Link
                  to={`/search?request=${request}&keywords=${keyword}`}
                >
                  {request && `Request ${request}`}<br />
                  {keyword && `Keyword ${keyword}`}
                </Link>

              </Stack>
            );
          })}
        </Grid>
      </Grid>

    </Container>
  );
}
