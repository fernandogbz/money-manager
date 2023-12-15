import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import {formatDate} from '../helpers'

import SavingsIcon from '../img/savings_icon.svg'
import FoodIcon from '../img/food_icon.svg'
import HomeIcon from '../img/home_icon.svg'
import ExpensesIcon from '../img/expenses_icon.svg'
import LeisureIcon from '../img/leisure_icon.svg'
import HealthIcon from '../img/health_icon.svg'
import SubscriptionsIcon from '../img/subscriptions_icon.svg'


const IconsDictionary = {
  savings : SavingsIcon,
  food : FoodIcon,
  home : HomeIcon,
  expenses : ExpensesIcon,
  leisure : LeisureIcon,
  health : HealthIcon,
  subscriptions : SubscriptionsIcon
}

const Expense = ({expense}) => {
  const {category, name, amount, id, date} = expense; //Destructuring expense

  return (
    <div className='expense shadow'>
      <div className='content-expense'>
        <img 
          src={IconsDictionary[category]} 
          alt="Expense Icon" 
          />
        <div className='description-expense'>
          <p className='category'>{category}</p>
          <p className='expense-name'>{name}</p>
          <p className='expense-date'>
            Added on: {''}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
        <p className='expense-amount'>${amount}</p>
    </div>
  )
}

export default Expense
