import React from 'react'
import {formatDate} from '../helpers'

import SavingsIcon from '../img/savings_icon.svg'

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
