import { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { TarjetaVehiculo } from '../components';
import { cars } from '../../data/cars';


export const CarShopView = () => {

  const [carList, setCarList] = useState(cars);

  console.log(cars)


  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-end'
      alignItems='center'
      style={{ height: '50vh' }} // Esto asegura que el contenedor ocupe la mitad inferior de la pantalla
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        style={{ width: '100%' }} // Ocupa todo el ancho disponible
      >

        {
          carList.map(( car ) => (
            <TarjetaVehiculo 
            key={ car.id }
            {...car}
            />
          ))
        }


      </Grid>
    </Grid>
  );
}
