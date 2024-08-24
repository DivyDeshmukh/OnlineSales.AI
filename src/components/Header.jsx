import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    {
      name: "Dashboard",
      slug: "/",
      // this isActive depends on whether user is logged in or not. so basically it helps us in showing dynamic header. Currently, no authentication process we have so I am making everything true
      isActive: true,
    },
    {
      name: "Create",
      slug: "/create",
      isActive: true,
    },
  ];

  return (
    <header className="bg-slate-900 py-4 flex justify-between items-center px-6">
      <Logo />
      <div className="flex justify-center items-center gap-12">
        {navItems?.map(
          (item, idx) =>
            item.isActive && (
              <NavLink
                to={item.slug}
                key={idx}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-red-600"
                }
              >
                {item.name}
              </NavLink>
            )
        )}
      </div>
    </header>
  );
}

export default Header;
