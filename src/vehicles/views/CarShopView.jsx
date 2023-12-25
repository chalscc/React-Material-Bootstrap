import { useEffect } from 'react';

import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'

import { VehiclesCard } from '../components';
import { setCarsInit } from '../../store/slices';

export const CarShopView = ({ cars }) => {
  const dispatch = useDispatch();

  const { carList } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(setCarsInit(cars));
  }, [])  

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-end'
      alignItems='center'
      sx={{ height: '50vh' }}
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={{ width: '100%' }}
      >

        {
          carList.map((car) => (
            <VehiclesCard
              key={car.id}
              {...car}
            />
          ))
        }


      </Grid>
    </Grid>
  );
}
