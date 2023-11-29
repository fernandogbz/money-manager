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
        <div className='field'></div>
      </form>
    </div>
  )
}

export default Modal
