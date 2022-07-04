import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiArrowToLeft } from "react-icons/bi";
import { IconContext } from "react-icons";

const date = new Date()
const hour = date.toString().slice(16, 18)

export const Error = () => {
  return (
    <div>
        <div className={(hour > 16 && hour <= 9) ? 'container' : 'container2'}>
        <div className='error-message'>
            <img src='Error-message.png' alt='' />
        </div>
        <div>
        <IconContext.Provider value={{color: "#50C9F2", size: '4em' }}>
            <NavLink to='/home'><button className="following-days"><BiArrowToLeft/></button></NavLink>
            </IconContext.Provider>
        </div>
        </div>
    </div>
  )
}
