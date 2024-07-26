import React from 'react'
import style from './Header.module.css'
import {appBarBackgroundColorGlobal} from '../../utilities/Colors'
import Logo from '../../assets/images/logo.png'


const Header = () => {
  return (
    <div className={`${style.container}`} style={{backgroundColor:appBarBackgroundColorGlobal}}>
       <img src={Logo} alt='' height={30} width={30} />
    </div>
  )
}

export default Header