import React from 'react'
import { VehiclesLayout } from '../layout/VehiclesLayout'
import { VehicleStatisticsView } from '../views'

export const VehiclesPage = () => {
  return (
    <VehiclesLayout>

      <VehicleStatisticsView />

    </VehiclesLayout>
  )
}
