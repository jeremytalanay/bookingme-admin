import React from 'react';

import style from './Card.module.css';

const Card = props => {
  const classes = `${style.card} ${props.className} ${props.body === true && style.body}`;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card;