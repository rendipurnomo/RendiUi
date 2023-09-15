import React from 'react';
import './Button.css';

const Button = (props) => {
  const { children='button', variant='contained',color='primary'} = props;

  let btnClasses='';

  let contained = `${color}-contained`;
  let outlined = `${color}-outlined`;

  if(variant === 'contained'){
    btnClasses = contained;
  }
  if(variant === 'outlined'){
    btnClasses = outlined
  }
  
  return (
    <button variant={variant} color={color} className={`${btnClasses}`}>
      {children}
    </button>
  )
}

export default Button;