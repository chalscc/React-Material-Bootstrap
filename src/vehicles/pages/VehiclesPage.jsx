import React from 'react'
import { VehiclesLayout } from '../layout/VehiclesLayout'
import { CarShopView, ExpertsView } from '../views'

import { experts, cars } from '../../data';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';


export const VehiclesPage = () => {

  const theme = useTheme();
  const bgColor = theme.palette.secondary.main;

  return (
    <Box style={{ backgroundColor: bgColor }}>
      <VehiclesLayout>

        <ExpertsView experts={experts} />
        <CarShopView cars={cars} />

      </VehiclesLayout>
    </Box>
  )
}
