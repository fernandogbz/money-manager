import React from 'react'

const BudgetControl = ({budget}) => {

  // Takes the amount and turns it into the "money" format (with the '$' symbol, commas and dots)
  const formatAmount = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency:'USD'
    })
  }

  return (
    <div className='budget-container container shadow two-columns'>
      <div>
        <p>Graph here</p>
      </div>

      <div className='budget-content'>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p>
          <span>Available: </span> {formatAmount(0)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
