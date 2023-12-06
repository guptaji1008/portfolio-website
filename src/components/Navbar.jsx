import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ activeLink }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (activeLink) setActive(activeLink)
  }, [active])

  return (
    <>
      <nav className="bg-transparent lg:px-40 px-10 py-4 flex justify-between items-center">
        <div>
            <Link className="text-3xl text-gray-300 hover:text-white transition" to="/">Portfolio</Link>
        </div>
        <ul className="md:flex hidden items-center space-x-4">
          <li className="list-none text-lg" onClick={() => setActive("Home")}>
            <Link className={active === "Home" ? 'text-white text-xl' : 'text-lg text-gray-300 hover:text-white transition'} to="/">Home</Link>
          </li>
          <li className="list-none text-lg" onClick={() => setActive("About")}>
            <Link className={active === "About" ? 'text-white text-xl' : 'text-lg text-gray-300 hover:text-white transition'} to="/about">About</Link>
          </li>
          <li className="list-none text-lg" onClick={() => setActive("Skills")}>
            <Link className={active === "Skills" ? 'text-white text-xl' : 'text-lg text-gray-300 hover:text-white transition'} to="/skills">Skills</Link>
          </li>
          <li className="list-none text-lg" onClick={() => setActive("Exp")}>
            <Link className={active === "Exp" ? 'text-white text-xl' : 'text-lg text-gray-300 hover:text-white transition'} to="/experience">Experience</Link>
          </li>
          <li className="list-none text-lg" onClick={() => setActive("Projects")}>
            <Link className={active === "Projects" ? 'text-white text-xl' : 'text-lg text-gray-300 hover:text-white transition'} to="/projects">Projects</Link>
          </li>
          <li className="list-none text-lg" onClick={() => setActive("Contact")}>
            <Link className={active === "Contact" ? 'text-white text-xl' : 'text-lg text-gray-300 hover:text-white transition'} to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button type="button" className="flex items-center justify-center" onClick={() => setToggle(!toggle)}>
            {!toggle ? <GiHamburgerMenu className="mr-5 text-2xl text-gray-300 hover:text-white transition" /> : <IoMdClose className="mr-5 text-2xl text-gray-300 hover:text-white transition" />}
          </button>
          <div className={!toggle ? 'hidden' : 'bg-transparent absolute top-12 right-4 py-2 px-4 flex flex-col items-center space-y-2 rounded-xl z-10'}>
            <p className="list-none text-lg" onClick={() => setActive("Home")}>
                <Link className={active === "Home" ? 'text-white' : 'text-gray-300 hover:text-white transition'} to="/">Home</Link>
            </p>
            <p className="list-none text-lg" onClick={() => setActive("About")}>
                <Link className={active === "About" ? 'text-white' : 'text-gray-300 hover:text-white transition'} to="/about">About</Link>
            </p>
            <p className="list-none text-lg" onClick={() => setActive("Skills")}>
                <Link className={active === "Skills" ? 'text-white' : 'text-gray-300 hover:text-white transition'} to="/skills">Skills</Link>
            </p>
            <p className="list-none text-lg" onClick={() => setActive("Exp")}>
                <Link className={active === "Exp" ? 'text-white' : 'text-gray-300 hover:text-white transition'} to="/experience">Experience</Link>
            </p>
            <p className="list-none text-lg" onClick={() => setActive("Projects")}>
                <Link className={active === "Projects" ? 'text-white' : 'text-gray-300 hover:text-white transition'} to="/projects">Projects</Link>
            </p>
            <p className="list-none text-lg" onClick={() => setActive("Contact")}>
                <Link className={active === "Contact" ? 'text-white' : 'text-gray-300 hover:text-white transition'} to="/contact">Contact</Link>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
