import React from 'react'

import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

import { CarShopView, ExpertsView } from '../views'
import { VehiclesLayout } from '../layout/VehiclesLayout'
import { experts, cars } from '../../data';


export const VehiclesPage = () => {

  const theme = useTheme();
  const bgColor = theme.palette.secondary.main;

  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <VehiclesLayout>

        <ExpertsView experts={experts} />
        <CarShopView cars={cars} />

      </VehiclesLayout>
    </Box>
  )
}
