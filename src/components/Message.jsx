import React from 'react'

// Creating a component that can take different types(if it's and error or it's correct), and passing the children with the full message
const Message = ({children, type}) => {
  return (
    <div className={`alert ${type}`}>{children}
    </div>
  )
}

export default Message
