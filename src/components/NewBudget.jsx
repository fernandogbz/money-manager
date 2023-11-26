import {useState} from 'react'

const NewBudget = ({budget, setBudget}) => {

  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    if(!Number(budget) || Number(budget) < 0) {
      console.log('Not a valid budget')
    } else {
      console.log('Its a valid budget')
    }
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
            onChange={e => setBudget(e.target.value)} //Set budget as the value the user wrote
          />
        </div>

        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default NewBudget
