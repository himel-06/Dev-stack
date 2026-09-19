import { useState } from "react";
import logo from '../assets/logo-text.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* desktop navbar */}
      <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto px-4 h-20">
        <a href="#home" className="flex items-center gap-2">
        <img src={logo} alt="logo image"/>
        </a>

        <ul className="flex items-center gap-8">
          <li><a href="#home" className="text-pink-600">Home</a></li>
          <li><a href="#technologies" className="hover:text-pink-600">Technologies</a></li>
          <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
          <li><a href="#about" className="hover:text-pink-600">About</a></li>
          <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button>Sign In</button>
          <button className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="grid lg:hidden grid-cols-[1fr_auto_1fr] items-center px-4 h-16">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl justify-self-start">
          {menuOpen ? "✕" : "☰"}
        </button>

        <a href="#home" className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-500 text-white text-xs font-bold flex items-center justify-center">
          DS
        </a>

        <div className="flex items-center gap-2 justify-self-end">
          <button className="text-sm">Sign In</button>
          <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* mobile menu links */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-3 px-4 py-4 border-t border-gray-200">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#technologies" onClick={() => setMenuOpen(false)}>Technologies</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
