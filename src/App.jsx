import { useState } from 'react'
import Header from './components/Header'
import NewExpenseIcon from './img/new-expense.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  
  return (
    <>
      <Header 
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      />

      <div className='new-expense'>
        <img src={NewExpenseIcon} alt="new expense icon" />
      </div>
    </>
  )
}

export default App
