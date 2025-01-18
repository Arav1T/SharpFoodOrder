import React from 'react'
import ReactDOM from 'react-dom'



const Backdrop = (props) => {
  return <div className="fixed inset-0 w-full h-screen z-20 bg-black bg-opacity-75" onClick={props.onClose}/>;
};


const ModalOverlay=props=>(
<div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-lg shadow-lg z-30 animate-slide-down md:w-[40rem] md:left-1/2 md:transform md:-translate-x-1/2">
      <div className="">{props.children}</div>
    </div>
  
)

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  )
}
