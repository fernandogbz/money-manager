import React from 'react'

const Expense = ({expense}) => {
  const {category, name, amount, id} = expense; //Destructuring expense

  return (
    <div className='expense shadow'>
      <div className='content-expense'>

        <div className='description-expense'>
          <p className='category'>{category}</p>
          <p className='expense-name'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default Expense
