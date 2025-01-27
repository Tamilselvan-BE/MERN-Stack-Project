import React from 'react'
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"

const Navbar = () => {
  return (
    <div className='max-padd-container flexBetween py-2'>
        <img src={logo} alt="logoIcon" height={70} width={70}/>
        <img src={profile} alt="profileImg" height={60} width={60} />
    </div>
  )
}

export default Navbar