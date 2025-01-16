import React from 'react'
import Card from '../UI/Card';
import MealItemForm from './MealItemForm';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


export default function AvailableMeals() {
  return (
    <section className="max-w-[60rem] w-[90%] my-8 mx-auto animate-meals-appear">
        <Card>

        <ul className='list-none m-0 p-0'>
            {DUMMY_MEALS.map((meal)=>(
                    <li key={meal.id} className='flex border-b-2 pb-4 m-4 justify-between '>
                        <div>
                        <h3 className='m-0 mb-1 font-bold'>{meal.name}</h3>
                        <p className='italic'>{meal.description}</p>
                        <p className='mt-1 font-bold text-[#ad5502] text-xl'>${meal.price}</p>
                        </div>
                        <div>
                            <MealItemForm id={meal.id}/>
                        </div>

                    </li>
            ))}
        </ul>
        </Card>
      
    </section>
  )
}
