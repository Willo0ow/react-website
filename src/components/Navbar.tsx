import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute text-white w-screen z-10">
        <ul className='flex w-full gap-8'>
            <li className="uppercase hover:text-red-800"><Link to="/" >Home</Link></li>
            <li className="uppercase hover:text-red-800"><Link to="/contact">Contact</Link></li>
            <li className="uppercase hover:text-red-800"><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar