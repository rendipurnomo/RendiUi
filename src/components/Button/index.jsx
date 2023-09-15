import React from 'react';
import './Button.css';

const Button = (props) => {
  const { children='button', variant='contained',color='primary'} = props;

  let btnClasses='';

  let contained = `${color}-contained text-white`;
  let outlined = `${color}-outlined border-2`;

  if(variant === 'contained'){
    btnClasses = contained;
  }
  if(variant === 'outlined'){
    btnClasses = outlined
  }
  
  return (
    <button variant={variant} color={color} className={`${btnClasses} font-semibold px-4 py-2 rounded-md shadow`}>
      {children}
    </button>
  )
}

export default Button;