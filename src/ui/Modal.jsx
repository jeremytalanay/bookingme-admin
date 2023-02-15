import React, { useEffect } from 'react';
import ReactDOM from "react-dom";

import Card from './Card';
import style from './Modal.module.css';

const Modal = props => {
  const classes = `${style.modal} ${props.className && props.className}`;
  const modalTarget = document.getElementById('modal');
  
  const overlayClickHandler = (e) => {
    if(props.overlayClick && (e.target.id && e.target.id === 'modal_overlay')){
      props.overlayClick();
    }
  };

  useEffect(() => {
    // Anything in here is fired on component mount.
    document.body.classList.add('modal-open');

    return () => {
      // Anything in here is fired on component unmount.
      document.body.classList.remove('modal-open');
    }
  }, []);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div id="modal_overlay" className={classes} onClick={overlayClickHandler}>
          <Card className={`${style['modal__content']} dark-theme_bg-dark`}>
            {props.children}
          </Card>
        </div>,
        modalTarget
      )}
    </React.Fragment>
  );
};

export default Modal;