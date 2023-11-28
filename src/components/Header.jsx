import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget}) => {
  return (
    <header>
      <h1>Money Manager</h1>

      {
      //if it's a valid budget show 'budget control', otherwise just show the same NewBudget component"
      isValidBudget ? (
        <BudgetControl />
      ) : (
      <NewBudget 
      budget={budget}
      setBudget={setBudget}
      setIsValidBudget={setIsValidBudget}
    />)}
    </header>
  )
}

export default Header
