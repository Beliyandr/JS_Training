import React from 'react'
import classes from './Button.module.css';

export const Button = ({ children, onClick, isActive }) => {

  console.log(classes);
  return <button className={isActive ? `${classes.button} ${classes.active}` : classes.button} onClick={onClick}>{children}</button>

}
