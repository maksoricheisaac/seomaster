import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="shadow-lg z-10 sticky border-b border-b-gray-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="py-4">
             <Link className="text-4xl font-bold text-white" to="/">SEOmaster</Link>
            </div>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1 ">
            <Link to="/" className="py-5 px-3 text-white text-lg hover:text-cyan-500 transition-all duration-500">Home</Link>
            <Link to="/about" className="py-5 px-3 text-white text-lg hover:text-cyan-500 transition-all duration-500">About</Link>
            <Link to="/services" className="py-5 px-3 text-white text-lg hover:text-cyan-500 transition-all duration-500">Services</Link>
            <Link to="/projects" className="py-5 px-3 text-white text-lg hover:text-cyan-500 transition-all duration-500">Projects</Link>
            <Link to="/contact" className="py-5 px-3 text-white text-lg hover:text-cyan-500 transition-all duration-500">Contact</Link>
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-12 h-12 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-md text-white hover:bg-cyan-600">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-md text-white hover:bg-cyan-600">About</Link>
          <Link to="/services" className="block py-2 px-4 text-md text-white hover:bg-cyan-600">Services</Link>
          <Link to="/projects" className="block py-2 px-4 text-md text-white hover:bg-cyan-600">Projects</Link>
          <Link to="/contact" className="block py-2 px-4 text-md text-white hover:bg-cyan-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar
