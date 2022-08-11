import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#7c5295" fontWeight="600"
         fontSize="36px" >
            Fitness Guide
         </Typography>
         <Typography fontWeight={700}
         sx={{ fontSize: { lg: '44px', xs: '40px'}}}
         mb="23px" mt="30px"
         >
            Grind, Grow and <br /> Get Healthy
         </Typography>
         <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Find the most effective exercises for your needs
         </Typography>
         <Button variant="contained" color="error"
          href="#exercises"
          sx={{ backgroundColor: '#b491c8', padding: '10px'}}
          >
            GET STARTED
         </Button>
         <Typography 
            fontWeight={600}
            color="#663a82"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
            >
                Exercise
         </Typography>
         <img src={HeroBannerImage}  alt="banner"
         className="hero-banner-img" style={{
            flex: '1', width: '750px', height: '875px'}}/>
    </Box>
  )
}

export default HeroBanner
