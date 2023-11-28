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

      {
      //if it's a valid budget show 'budget control', otherwise just show the same NewBudget component"
      isValidBudget ? (
        <p>Budget Control</p>
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
