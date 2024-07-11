import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className=""><NavLink className="text-xl" to="/">Home</NavLink></li>
      <li><NavLink className="text-xl " to="/about">About</NavLink></li>
      <li><NavLink className="text-xl " to="/favorites">Favorites</NavLink></li>
      <li><NavLink className="text-xl " to="/contact">Contact</NavLink></li>
      <li><NavLink className="text-xl " to="/login">Login</NavLink></li>
      <li><NavLink className="text-xl " to="/registation">Registation</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-white  sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
          {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

