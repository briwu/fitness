import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#b491c8">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="150px" height="150px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Brian Wu
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
