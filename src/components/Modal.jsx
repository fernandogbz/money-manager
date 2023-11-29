import CloseBtn from '../img/close.svg'

const Modal = () => {
  return (
    <div className="modal">
      <div className="close-modal">
        <img 
        src={CloseBtn} 
        alt="close modal" />
      </div>
    </div>
  )
}

export default Modal
