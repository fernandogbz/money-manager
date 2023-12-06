import React from 'react'
import {formatDate} from '../helpers'

import SavingsIcon from '../img/savings_icon.svg'
import FoodIcon from '../img/food_icon.svg'
import HomeIcon from '../img/home_icon.svg'
import ExpensesIcon from '../img/expenses_icon.svg'
import LeisureIcon from '../img/leisure_icon.svg'
import HealthIcon from '../img/health_icon.svg'
import SubscriptionsIcon from '../img/subscriptions_icon.svg'


const Expense = ({expense}) => {
  const {category, name, amount, id, date} = expense; //Destructuring expense

  return (
    <div className='expense shadow'>
      <div className='content-expense'>

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
