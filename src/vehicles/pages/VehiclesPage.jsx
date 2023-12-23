import React from 'react'
import { VehiclesLayout } from '../layout/VehiclesLayout'
import { CarShopView, ExpertsView } from '../views'

import { experts, cars } from '../../data';


export const VehiclesPage = () => {
  return (
    <VehiclesLayout>

      <ExpertsView experts={experts} />
      <CarShopView cars={cars} />

    </VehiclesLayout>
  )
}
