import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Products from '../Products/Products';
import TopCategory from '../TopCategory/TopCategory';

const Home = () => {
    return (
        <Box>
            <Banner></Banner>
            <Products></Products>
            <Offers></Offers>
            <TopCategory></TopCategory>
        </Box>
    );
};

export default Home;