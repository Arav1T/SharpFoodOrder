import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

export default function Meals() {
  return (
    <React.Fragment>
        <MealsSummary/>
      <AvailableMeals/>
    </React.Fragment>
  )
}
