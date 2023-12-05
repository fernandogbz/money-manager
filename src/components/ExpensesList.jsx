import React from 'react'

const ExpensesList = ({expenses}) => {
  return (
    <div className='expenses-list container'>
      <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
    </div>
  )
}

export default ExpensesList
