import { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { VehiclesCard } from '../components';
import { cars } from '../../data/cars';


export const CarShopView = () => {

  const [carList, setCarList] = useState(cars);

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-end'
      alignItems='center'
      style={{ height: '50vh' }}
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        style={{ width: '100%' }}
      >

        {
          carList.map(( car ) => (
            <VehiclesCard 
            key={ car.id }
            {...car}
            />
          ))
        }


      </Grid>
    </Grid>
  );
}
