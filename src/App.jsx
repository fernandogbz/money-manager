import { useState } from 'react'
import Header from './components/Header'
import NewExpenseIcon from './img/new-expense.svg'
import Modal from './components/Modal';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  
  const [animateModal, setAnimateModal] = useState(false);

  // When user clicks on new expense icon
  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      console.log('Animating modal...')
    }, 2000);
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

      {modal && <Modal 
        setModal={setModal}
        />}
    </>
  )
}

export default App
