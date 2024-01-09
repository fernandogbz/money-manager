import {useState} from 'react'
import Message from './Message'

const NewBudget = ({
  budget, 
  setBudget,
  setIsValidBudget}) => {

  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    if(!budget || budget < 0) {
      setMessage('Not a valid budget')
      return
    }

    setMessage('')
    setIsValidBudget(true)
  }

  function getNumbers(string) {
    return string.replace(/\D/g, ''); //Takes a string as an argument and uses regex to remove all non-digit characters
  }

  return (
    <div className='budget-container container shadow'>

      <form onSubmit={handleBudget} className='form'>
        <div className='field'>
          <label>Define Budget</label>

          <input 
            className='new-budget'
            type="text"
            placeholder='Add your budget'
            value={budget}
            onChange={e => setBudget(Number(getNumbers(e.target.value)))} //Set budget as the value the user wrote
          />
        </div>

        <input type="submit" value="Add"/>

        {message && <Message type="error">{message}</Message> // This component takes type error and children (that is the message) to display the error message below submit input on screen
        } 
      </form>
    </div>
  )
}

export default NewBudget
