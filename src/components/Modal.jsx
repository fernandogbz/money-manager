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
      </form>
    </div>
  )
}

export default Modal
