import React from 'react'
import NewBudget from './NewBudget'

const Header = ({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget}) => {
  return (
    <header>
      <h1>Money Manager</h1>
      <NewBudget 
        budget={budget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}
      />
    </header>
  )
}

export default Header
