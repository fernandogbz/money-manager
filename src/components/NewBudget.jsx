import React from 'react'

const NewBudget = ({budget, setBudget}) => {
  return (
    <div className='budget-container container shadow'>

      <form className='form'>
        <div className='field'>
          <label>Define Budget</label>

          <input 
            className='new-budget'
            type="text"
            placeholder='Add your budget'
            value={budget}
          />
        </div>

        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default NewBudget
