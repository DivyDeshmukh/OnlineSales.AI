import React from 'react';
import Logo from "./Logo";
import { Link, NavLink } from 'react-router-dom';

function Header() {

    const navItems = [
        "Dashboard",
        "Create",
        "Fill"
    ];

  return (
    <header className='bg-slate-900 py-4 flex justify-between items-center px-6'>
        <Logo />
        <div className='flex justify-center items-center gap-12'>
            {
                navItems?.map((item, idx) => (
                    <NavLink to={item.toLowerCase()} key={idx}  className={({ isActive }) => 
                        isActive ? "text-white" : "text-red-600"
                      }>item</NavLink>
                ))
            }
        </div>
    </header>
  );
}

export default Header;
