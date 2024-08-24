
import React, { useState } from "react";
import Login from "./Login";
import { Link,NavLink } from "react-router-dom";


const Navbar = ({cartCount}) => {
  const [showmenu, setshowmenu] = useState(false);
  const [showlogin,setshowlogin]=useState(false)

  // const [count,setcount]=useState(0)

  const handleMenu = () => {
    setshowmenu(!showmenu);
  };

  const handleSignin=()=>{
    setshowlogin(true)
  }

  const handlecloseLogin=()=>{
    setshowlogin(false)
  }

  return (
    <div className="main-container bg-slate-400 flex flex-row justify-around p-2 top-0 fixed z-50 w-full items-center ">
      <div className="sm:hidden">
        <i onClick={handleMenu} className="fa-solid fa-bars"></i>
      </div>

      <div>
        <p className="sm:text-xl cursor-pointer"><Link to='./'>Menol</Link></p>
      </div>

      <div className="hidden sm:block ">
        <ul className=" flex flex-row gap-6">
          {/* <li className="active:"> <Link to='/Men'>Men</Link></li> */}
          <NavLink to="/Men" className= {({ isActive }) => (isActive ? 'font-bold' : '')} >
    Men
  </NavLink>
          <NavLink to="/Women" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Women
  </NavLink>
          <NavLink to="/Kid" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Kid
  </NavLink>
          <NavLink to="/Electronincs" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Electronincs
  </NavLink>
          {/* <li><Link to='/Women'>Women</Link></li>
          <li><Link to='/Kid'>Kid</Link></li>
          <li><Link to='/Electronincs'>Electronincs</Link></li> */}
        </ul>
      </div>

      {
        showmenu&&
        <div className="absolute sm:hidden top-[41px] z-10 left-0 w-auto px-3 py-10  bg-slate-500 flex flex-col  justify-center items-center">
        <ul className="flex flex-col gap-5 text-[18px] text-white">
          {/* <li>Men</li>
          <li>Women</li>
          <li>Kid</li>
          <li>Electronincs</li> */}
          <NavLink to="/Men" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Men
  </NavLink>
          <NavLink to="/Women" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Women
  </NavLink>
          <NavLink to="/Kid" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Kid
  </NavLink>
          <NavLink to="/Electronincs" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
    Electronincs
  </NavLink>
        </ul>
      </div>
      }



      <div className="flex">
        <p className="sm:hidden">
        
          <div>
            <input className="pl-2 rounded-lg" type="text" placeholder="Search " />
          </div>
        </p>

        <div className="hidden sm:block border-[1px]  bg-white h-[28px] w-[250px]  items-center rounded-lg ">
          <i className="text-[18px] pl-3 fa-solid fa-magnifying-glass"></i>
          <input
            className="outline-none bg-white pl-2 "
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div>
        <button  onClick={handleSignin} className="hover:font-semibold">Sign in</button>
        {
          showlogin&&<Login onclose={handlecloseLogin}/>
        }

      </div>

    <div className="hidden sm:block">
  <i className="fa-solid fa-cart-shopping" />
  <p className="absolute top-0 mx-4 text-white ">{cartCount}</p>
</div>
    </div>
  );
};

export default Navbar;