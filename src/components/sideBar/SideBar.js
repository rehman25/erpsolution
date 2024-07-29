import React,{useState} from 'react'
import style from './Sidebar.module.css'
import { appBarBackgroundColorGlobal, textColorDark, textPrimaryColor } from '../../utilities/Colors'
import { Layout, Menu } from "antd";
import { MdOutlineInventory } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";
const { Sider } = Layout;




const Sidebar = () => {
  const [isMenuClosed, setMenuClosed] = useState(false);

  const handleMenuToggle = () => {
    setMenuClosed(!isMenuClosed);
  };

  return (
    <>
     <Sider>
          <div className={`${style.container}`}  />
          <Menu theme="dark" mode="inline" className={style.sideBarMenu} style={{backgroundColor:appBarBackgroundColorGlobal}}> 
            <div className={style.backword}>
              {/* <IoArrowBackSharp size={24}  onClick={handleMenuToggle} />d */}
            </div>
            <Menu.Item key="1" icon={<MdOutlineInventory />}>
              <Link to="/AddSuppliers">InvertoryManagement</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<MdOutlineInventory />} className={style.logout}>
              <Link to="/">Logout</Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
    </>
  );
};

export default Sidebar;