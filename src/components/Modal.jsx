import CloseBtn from '../img/close.svg'

const Modal = () => {

  const hideModal = () => {
    console.log('Hiding...')
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
    </div>
  )
}

export default Modal
