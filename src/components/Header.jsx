import React from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    {
      name: "Dashboard",
      slug: "/",
      isActive: true,
    },
    {
      name: "Create",
      slug: "/create",
      isActive: true,
    },
  ];

  return (
    <header className="bg-slate-900 py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
      <Logo />
      <nav className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-4 sm:mt-0">
        {navItems?.map(
          (item, idx) =>
            item.isActive && (
              <NavLink
                to={item.slug}
                key={idx}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold"
                    : "text-red-600 hover:text-white transition-colors duration-200"
                }
              >
                {item.name}
              </NavLink>
            )
        )}
      </nav>
    </header>
  );
}

export default Header;
