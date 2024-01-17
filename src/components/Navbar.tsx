import { Link } from "react-router-dom";
import reactIcon from "../assets/react.svg";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isPageOnTop, setIsPageOnTop] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrollZero = window.scrollY === 0;
      if (isScrollZero === isPageOnTop) return;
      setIsPageOnTop(isScrollZero);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPageOnTop]);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.classList.add("overlay-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("overlay-open");
      document.body.style.overflow = "auto";
    }
  }, [isNavbarOpen]);

  return (
    <nav
      className={`fixed text-white w-screen z-10 px-6 md:px-10 py-5 ${
        (!isPageOnTop || isNavbarOpen) && "navbar-slide-in text-black bg-white shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center">
        <img src={reactIcon} alt="logo" className="w-10 h-10" />
        <Bars4Icon
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className="h-10 w-10 md:hidden"
        />
        <ul className="gap-8 uppercase hidden md:flex">
          <li className="hover:text-red-800">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-800">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-red-800">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      {isNavbarOpen && (
        <ul className="gap-8 uppercase flex flex-col pt-10 pb-5">
          <li onClick={() => setIsNavbarOpen(false)} className="hover:text-red-800">
            <Link to="/" className="block">Home</Link>
          </li>
          <li onClick={() => setIsNavbarOpen(false)} className="hover:text-red-800">
            <Link to="/contact" className="block">Contact</Link>
          </li>
          <li onClick={() => setIsNavbarOpen(false)} className="hover:text-red-800">
            <Link to="/about" className="block">About</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
