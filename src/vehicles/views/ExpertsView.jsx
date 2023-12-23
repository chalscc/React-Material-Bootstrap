import { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { VehiclesCard, VehiclesExpert } from '../components';
import { experts } from '../../data/experts';


export const ExpertsView = () => {

  console.log('experts', experts)

  const [expertsList, setExpertsList] = useState(experts);

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
          expertsList.map((expert) => (
            <VehiclesExpert
              key={expert.id}
              {...expert}
            />
          ))
        }

      </Grid>
    </Grid>
  );
}
