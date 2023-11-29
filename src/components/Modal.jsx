import CloseBtn from '../img/close.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {

  const hideModal = () => {
    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
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

      <form className={`form ${animateModal ? "animate" : 'close'}`}>
        <legend>New Expense</legend>
        <div className='field'>
          <label htmlFor="name">Expense Name</label>
          <input 
          type="text" 
          placeholder='Add Expense Name'
          id='name'
          />
        </div>
        <div className='field'>
          <label htmlFor="amount">Expense Name</label>
          <input 
          type="number" 
          placeholder='Add Amount of Expense: Ex. 300'
          id='amount'
          />
        </div>
        <div className='field'>
          <label htmlFor="category">Category</label>

          <select 
            id="category">
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

        <input 
        type="submit"
        value='Add Expense'
        />
      </form>
    </div>
  )
}

export default Modal
