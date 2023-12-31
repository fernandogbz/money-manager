import { useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({
  expenses,
  setExpenses, 
  budget, 
  setBudget,
  setIsValidBudget
}) => {

  const [percentage, setPercentage] = useState(0)
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0) //.reduce takes 2 parameters, an accumulated, and the instance (of expenses) that will iterate in each one of the objects. Expense.amount will accumulate the amount in 'total', and last the starting value (0)
    
    const totalAvailable = budget - totalSpent;

    // Calculate percentage spent
    const newPercentage = ( ((budget - totalAvailable) / budget) * 100 ).toFixed(2);
    setAvailable(totalAvailable)
    setSpent(totalSpent)
    setTimeout(() => {
      setPercentage(newPercentage)
    }, 1500)   
  }, [expenses])

  // Takes the amount and turns it into the "money" format (with the '$' symbol, commas and dots)
  const formatAmount = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency:'USD'
    })
  }

  const handleResetApp = () => {
    const result = confirm('Do you want to reset budget and expenses?')

    if(result) {
      setExpenses([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }

  return (
    <div className='budget-container container shadow two-columns'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#b91c1c' : '#3B82F6',
            trailColor:'#f5f5f5',
            textColor: percentage > 100 ? '#b91c1c' : '#3B82F6',

            pathTransitionDuration:'1'
          })}
          value={percentage}
          text={`${percentage}% Spent`}
        />
      </div>

      <div className='budget-content'>
        <button 
          className='reset-app' 
          type='button'
          onClick={handleResetApp}  
        >
          Reset App
        </button>
        <p>
          <span>Budget: </span> {formatAmount(budget)}
        </p>
        <p className={`${available < 0 ? 'negative' : ''}`}>
          <span>Available: </span> {formatAmount(available)}
        </p>
        <p>
          <span>Spent: </span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
