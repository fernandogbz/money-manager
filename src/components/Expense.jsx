import React from 'react'

const Expense = ({expense}) => {
  return (
    <div className='expense shadow'>
      <div className='content-expense'>

        <div className='description-expense'>
          <p className='category'>
            {expense.category}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Expense
