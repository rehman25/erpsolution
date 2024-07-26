import React from 'react'
import style from './Sidebar.module.css'
import { appBarBackgroundColorGlobal, textColorDark, textPrimaryColor } from '../../utilities/Colors'
import { IoMenuSharp } from "react-icons/io5";



const SideBar = () => {
  return (
    <div className={`${style.container}`} style={{backgroundColor:appBarBackgroundColorGlobal}}>
         <div className={style.logoCont}>
            <IoMenuSharp color='white' size={24} />
         </div>
        <div className={style.List}> 
           <span style={{color:textColorDark}} className={style.ListItem}>Inventory</span>
        </div>
    </div>
  )
}

export default SideBar