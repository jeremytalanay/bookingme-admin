import React, { useState } from 'react';

import style from './Alert.module.css';

const Alert = (props) => {
  const [alertVisible, setAlertVisible] = useState(true);
  let closeBtnEnabled = true;

  if(props.close === false){
    closeBtnEnabled = false;
  }

  const closeAlertHandler = () => {
    setAlertVisible(false);
  };

  const classes = `${style.alert} ${props.className} ${props.theme ? style['theme-'+props.theme] : style['theme-default']}`;
  return (
    <React.Fragment>
      {
        alertVisible && (
          <div className={classes}>
            {props.children}
            {closeBtnEnabled && (<span className={style.close}><button onClick={closeAlertHandler}><i className="fa fa-times" aria-hidden="true"></i></button></span>) }
          </div>
        )
      }
    </React.Fragment>
  );
};

export default Alert;