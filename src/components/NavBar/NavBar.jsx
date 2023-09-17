import { useState } from "react";
import Link from "./../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState([]);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
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
      <ul className="md:flex gap-4">
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
