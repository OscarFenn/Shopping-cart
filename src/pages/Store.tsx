import * as React from 'react';
import storeItems from "../data/items.json";
import Grid from '@mui/material/Grid';
import { StoreItem } from "../components/StoreItem";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function Store() {
    return <>
    <Container sx={{ mb: 4 }}>
    <Typography 
        variant="h1">
        Store
        </Typography>
    <Grid container rowSpacing={8} columnSpacing={8}>
        {storeItems.map(item => (
        <Grid item xs={4} key={item.id}>
        <StoreItem {...item} />
        </Grid>
        ))}
    </Grid>
    </Container>
    </>
}