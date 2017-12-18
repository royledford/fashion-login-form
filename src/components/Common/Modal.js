//-------------------------------------------------------------------------
// Modal
// Displays a modal form
//
// example use:
//   <button onClick={setState({isModalOpen: true})}>Open modal</button>
//   <Modal
//     show={state.isModalOpen}
//     transitionName="modal-anim"
//     onBackgroundClick={() => setState({ isModalOpen: false })}
//     >
//       <h3>My Modal</h3>
//       <p>This is the modals body.</p>
//   </Modal>
//-------------------------------------------------------------------------
// TODO: what is the tranisitonName doing?
import React from 'react'
import PropTypes from 'prop-types'
import { brandcolor } from '../../styles/colors'
import './Modal.css'

const Modal = props => {
  let modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    borderRadius: '4px',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff',
    overflowY: 'auto',
    overflowX: 'hidden',

    width: '75%',
    maxWidth: '768px',
    margin: '0px auto',
    opacity: 1,
  }

  let buttonStyle = {
    position: 'relative',
    padding: '8px',
    backgroundColor: brandcolor,
    color: 'white',
    fontSize: 14,
    fontWeight: 300,
    left: 20,
    display: 'inline-block',
  }
  // If a width is supplied we can't use the
  // translate trick, you need to use the -margin trick
  if (props.width) {
    modalStyle.width = props.width + 'px'
    modalStyle.marginLeft = '-' + props.width / 2 + 'px'
    modalStyle.transform = null
  }

  // When supplied height is bigger than the window, use percentages.
  if (props.height > window.innerHeight) {
    modalStyle.height = '90%'
    modalStyle.top = '50%'
    modalStyle.transform = 'translateY(-50%)'
  }

  // marge any supplied styles
  if (props.style) {
    modalStyle = { ...modalStyle, ...props.style }
  }

  let backdropStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: '9998',
    background: 'rgba(0, 0, 0, 0.3)',
  }

  // marge any supplied styles
  if (props.backdropStyle) {
    backdropStyle = { ...backdropStyle, ...props.backdropStyle }
  }

  if (props.open === false) return null

  return (
    <div>
      <div style={modalStyle}>
        <h3 style={{ padding: 14 }}>{props.title}</h3>
        {props.children}
        <div style={{ textAlign: 'right' }}>
          <button style={buttonStyle}>Close</button>
        </div>
      </div>
      <div style={backdropStyle} onClick={props.onBackgroundClick} />
    </div>
  )
}

Modal.PropTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  style: PropTypes.object,
  backdropStyle: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  onBackgroundClick: PropTypes.func,
}
Modal.defaultProps = {
  show: false,
}
export default Modal
