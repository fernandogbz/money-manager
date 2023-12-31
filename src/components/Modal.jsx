import { useState, useEffect } from 'react'
import Message from './Message'
import CloseBtn from '../img/close.svg'

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense
}) => {

  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      setName(editExpense.name)
      setAmount(editExpense.amount)
      setCategory(editExpense.category)
      setId(editExpense.id)
      setDate(editExpense.date)
    }
  }, [])

  const hideModal = () => {
    setAnimateModal(false)
    setEditExpense({})

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault();

    // if any of those inputs is empty, display a message saying that all fields are required
    if([name, amount, category].includes('')) {
      setMessage('All fields are required')

      setTimeout(() => {
        setMessage('')
      }, 3000);
      return;
    }

    saveExpense({name, amount, category, id, date})
    
  }

  return (
    <div className="modal">
      <div className="close-modal">
        <img 
        src={CloseBtn} 
        alt="close modal" 
        onClick={hideModal}
        />
      </div>

      <form 
        onSubmit={handleSubmit}
        className={`form ${animateModal ? "animate" : 'close'}`}
      >
        <legend>{editExpense.name ? "Edit Expense" : "New Expense"}</legend>

        <div className='field'>
          <label htmlFor="name">Expense Name</label>
          <input 
            type="text" 
            placeholder='Add Expense Name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </div>
        <div className='field'>
          <label htmlFor="amount">Amount</label>
          <input 
            type="number" 
            placeholder='Add Amount of Expense: Ex. 300'
            id='amount'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            />
        </div>
        <div className='field'>
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="savings">Savings</option>
              <option value="food">Food</option>
              <option value="home">Home</option>
              <option value="expenses">Miscellaneous Expenses</option>
              <option value="leisure">Leisure</option>
              <option value="health">Health</option>
              <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        {message && <Message type='error'>{message}</Message>}

      <input 
            type="submit"
            value={editExpense.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  )
}

export default Modal
