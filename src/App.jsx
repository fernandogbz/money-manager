import { useState } from 'react'
import Header from './components/Header'
import NewExpenseIcon from './img/new-expense.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false)
  
  // When user clicks on new expense icon
  const handleNewExpense = () => {
    setModal(true)
  }

  return (
    <>
      <Header 
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='new-expense'>
          <img 
            src={NewExpenseIcon} 
            alt="new expense icon"
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && <p>Desde Modal</p>}
    </>
  )
}

export default App
