import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

//
const BackDrop = (props) => {
  return (
    <div
      onClick={props.onHideCart}
      className="fixed top-0 left-0 w-[100%] h-[100vh] z-20"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="flex justify-center">
      <div className="modal fixed top-[20vh] w-[40%] bg-white p-[1rem] rounded-[14px] z-30">
        <div>{props.children}</div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  //getting overlay div which is created using portal
  const portalElement = document.getElementById("overlay");

  //return
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
