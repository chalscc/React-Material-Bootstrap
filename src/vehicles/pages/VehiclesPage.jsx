import React from 'react'
import { VehiclesLayout } from '../layout/VehiclesLayout'
import { CarShopView, ExpertsView } from '../views'

export const VehiclesPage = () => {
  return (
    <VehiclesLayout>

      <ExpertsView />
      <CarShopView />

    </VehiclesLayout>
  )
}
