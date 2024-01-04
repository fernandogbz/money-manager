import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import {generateId} from './helpers'
import NewExpenseIcon from './img/new-expense.svg'

function App() {
  
  const [expenses, setExpenses] = useState([])

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpense, setEditExpense] = useState({})

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 500);
    }
  }, [editExpense]) // This effect turns the modal to true to edit expenses

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget]) // This effect will run only at the beginning when budget change from 0 to the user's budget

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []) // JSON.stringify turns an array to string, and if there are no expenses, set expenses as an empty array
  }, [expenses])

  useEffect(()=> {
    const budgetLocalStorage = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLocalStorage > 0) {
      setIsValidBudget(true)
    }
  }, []) // This effect runs only once to save the budget in localStorage

  // When user clicks on new expense icon
  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
    
  }
  
  const saveExpense = expense => {
    if(expense.id) {
      // Update
      const updatedExpenses = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updatedExpenses)
      setEditExpense({})
    } else {
      // New Expense
      expense.id = generateId(); // Generate Id
      expense.date = Date.now(); // Get Date
      setExpenses([... expenses, expense]) // Save new expenses, takes the same expenses array and add the expense object that comes from Modal
    }

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter( expense => expense.id !== id)
    setExpenses(updatedExpenses)
  }
  
  return (
    <div className={modal ? 'pin' : ''}>
      <Header 
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
        <main>
          <ExpensesList 
            expenses={expenses}
            setEditExpense={setEditExpense}
            deleteExpense={deleteExpense}
          />
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
        editExpense={editExpense}
        setEditExpense={setEditExpense}
        />}
    </div>
  )
}

export default App
