import React from 'react'

export const WayToTeach = ({ title, desc }) => {
  return (
     <>
       <li>
         <h2>{title}</h2>
         <p>
           <strong>{desc}</strong>
         </p></li>
     </>
   )
}
