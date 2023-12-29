import React from 'react'
import Expense from './Expense'

const ExpensesList = ({expenses, setEditExpense, deleteExpense}) => {
  return (
    <div className='expenses-list container'>
      <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>

      {expenses.map( expense => ( //// map execute at least one time for each item, if there aren't don't execute

        <Expense 
          key={expense.id}
          expense={expense}
          setEditExpense={setEditExpense}
          deleteExpense={deleteExpense}
        />
      ))
      }
    </div>
  )
}

export default ExpensesList
