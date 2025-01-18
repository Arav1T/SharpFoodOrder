import React from 'react'
import meals from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartBtn from './HeaderCartBtn'
export default function Header(props) {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeal</h1>
            {/* <button>Cart</button>
             */}
             <HeaderCartBtn onClick={props.onShowCart}/>
        </header>
        
    <div className={classes['main-image']}>
      <img src={meals} alt='A table full of delicious food!' className='transform -rotate-[5deg] -translate-y-16 -translate-x-4' />
    </div>
    </React.Fragment>
  )
}
