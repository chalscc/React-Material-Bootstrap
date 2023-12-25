import { useState } from 'react';

import { Grid } from '@mui/material';

import { VehiclesExpert } from '../components';

export const ExpertsView = ( {experts} ) => {

  const [expertsList, setExpertsList] = useState(experts);

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-end'
      alignItems='center'
      sx={{ height: '37vh' }}
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
