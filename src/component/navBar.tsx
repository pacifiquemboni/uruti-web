import { useState } from 'react';
import logo from '../assets/images/logo.svg';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Portfolio', link: '/portfolio' },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white flex items-center p-6 px-10 md:px-12 justify-between border-b-[#00AAA9] border-b-[3px] border-opacity-15 fixed w-full z-50 top-0">
      <div>
        <a href="/">
          <img
            src={logo}
            width="150"
            className="transition-all duration-300 hover:scale-110"
            alt="URUTI_LOGO"
            loading="lazy"
          />
        </a>
      </div>
      <ul className="md:flex gap-14 hidden">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="hover:opacity-70"
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <a href="/about#team" className="hover:opacity-70">
            Team
          </a>
        </li>
        <li>
          <a href="/#testimonials" className="hover:opacity-70">
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="/#contact-us"
            className="bg-[#00AAA9] p-3 rounded-lg px-5 hover:bg-white hover:text-[#00AAA9] whitespace-nowrap"
          >
            Reach to us
          </a>
        </li>
      </ul>

      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex-col items-center self-end z-50 ${menuOpen ? 'block' : 'hidden'} py-8 mt-10 space-y-6 font-bold bg-white rounded-md sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="p-1.5 px-6 rounded uppercase transition-all duration-300 text-primary"
            >
              {item.title}
            </a>
          ))}
          <a
            href="/#testimonials"
            className="p-1.5 px-6 rounded uppercase transition-all duration-300 text-primary"
          >
            Testimonials
          </a>
          <a
            href="/about#team"
            className="p-1.5 px-6 rounded uppercase transition-all duration-300 text-primary"
          >
            Team
          </a>
          <a
            href="/#contact-us"
            className="bg-primary p-3 rounded-lg px-5 hover:bg-white hover:text-primary"
          >
            Reach to us
          </a>
        </div>
      </div>
      <button
        onClick={handleMenuToggle}
        id="menu-btn"
        className="block hamburger md:hidden focus:outline-none"
      >
        <span className="hamburger-top bg-white"></span>
        <span className="hamburger-middle bg-white"></span>
        <span className="hamburger-bottom bg-white"></span>
      </button>
    </nav>
  );
};

export default NavBar;
