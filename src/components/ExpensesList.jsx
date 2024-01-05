import React from 'react'
import Expense from './Expense'

const ExpensesList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses
}) => {
  return (
    <div className='expenses-list container'>

      { //If there's something in filter then iterate over the filtered expenses
      filter ? (
         <>
            <h2>{filteredExpenses.length ? 'Expenses' : 'There are no expenses in this category'}</h2>
            {
               filteredExpenses.map( expense => ( // map execute at least one time for each item, if there aren't don't execute
               <Expense 
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
               />
               ))
            }
         </>
         ) : ( // If there's nothing in filter iterate over all the expenses
         <>
            <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
               {
                  expenses.map( expense => (
                     <Expense 
                     key={expense.id}
                     expense={expense}
                     setEditExpense={setEditExpense}
                     deleteExpense={deleteExpense}
                     />
                  ))
               }
         </>
        ) 
      }
    </div>
  )
}

export default ExpensesList
