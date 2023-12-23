import React from 'react'
import { VehiclesLayout } from '../layout/VehiclesLayout'
import { CarShopView, ExpertsView } from '../views'
import { VehiclesExpert } from '../components'

export const VehiclesPage = () => {
  return (
    <VehiclesLayout>

      <ExpertsView />
      <CarShopView />

    </VehiclesLayout>
  )
}
