import CloseBtn from '../img/close.svg'

const Modal = ({setModal, animateModal}) => {

  const hideModal = () => {
    setModal(false)
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

      <form className='form'>
        <legend>New Expense</legend>
      </form>
    </div>
  )
}

export default Modal
