import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{ mb: 18, py: 8, background: '#b1e0ee' }}>
            <Container>
                <Grid container spacing="4">
                    <Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: 'var(--red)' }} variant="h4">
                                Apple
                            </Typography>
                            <Typography sx={{ textTransform: 'capitalize', fontWeight: 'bold', mt: 2 }} variant="h2">
                                New Mackbook Pro
                            </Typography>
                            <Typography sx={{ color: '#777', my: 4 }} variant="body1">
                                The new MacBook Pro features a 1080p camera, the best audio system in a notebook, and the most advanced connectivity ever in a MacBook Pro.
                            </Typography>
                            <Button variant="contained">Shop Now</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img style={{ width: '80%' }} src="https://i.ibb.co/BcJBfDz/Apple-Mac-Book-Pro-16-inch-Screen-10182021-big-carousel-jpg-slideshow-xlarge-2x-removebg-preview.png" alt="" sizes="" srcset="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;