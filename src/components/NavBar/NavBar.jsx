import { useState } from "react";
import Link from "./../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="p-6">
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden"
      >
        {open === true ? (
          <AiOutlineCloseCircle className="text-2xl"></AiOutlineCloseCircle>
        ) : (
          <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000  ${
          open ? "top-17" : "-top-60"
        } px-6 shadow-lg`}
      >
        {routes.map((route) => {
          return (
            <Link
              route={route}
              key={route.id}
            ></Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
