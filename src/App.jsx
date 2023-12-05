import { useState } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import {generateId} from './helpers'
import NewExpenseIcon from './img/new-expense.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenses, setExpenses] = useState([])

  // When user clicks on new expense icon
  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
    
  }
  
  const saveExpense = expense => {
    expense.id = generateId();
    setExpenses([... expenses, expense]) // Save new expenses, takes the same expenses array and add the expense object that comes from Modal

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
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
        <>
        <main>
          <ExpensesList />
        </main>
        <div className='new-expense'>
          <img 
            src={NewExpenseIcon} 
            alt="new expense icon"
            onClick={handleNewExpense}
          />
        </div>
        </>
      )}

      {modal && <Modal 
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense= {saveExpense}
        />}
    </>
  )
}

export default App
