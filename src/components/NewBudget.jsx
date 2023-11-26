import React from 'react'

const NewBudget = ({budget, setBudget}) => {

  const handleBudget = () => {

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
