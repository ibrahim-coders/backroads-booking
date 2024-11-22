import { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../components/AuthContext/AuthContext';

const Navbar = () => {
  const { user, sinOut, setUser } = useContext(AuthProvider);
  const [open, setOpen] = useState(false);
  // const handlesinOut = () => {
  //   sinOut
  //     .then(result => {
  //       setUser(result.user);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="bg-blue-950">
      <nav className="py-4 flex justify-between items-center max-w-screen-2xl px-6 mx-auto">
        {/* Logo */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-white">Travel-Books</h2>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex flex-col pb-4 justify-end md:flex-row gap-4 absolute md:static top-16 left-0 pl-6 bg-blue-950 w-full md:bg-transparent transition-transform duration-1000 ${
            open ? 'translate-y-0' : 'hidden'
          } md:translate-y-0 z-10 md:z-auto md:flex md:gap-6 md:items-center`}
        >
          <li>
            <NavLink
              to="/"
              className="text-xl text-white transition-colors duration-300 hover:text-sky-500"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-xl text-white transition-colors duration-300 hover:text-sky-500"
            >
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-xl text-white transition-colors duration-300 hover:text-sky-500"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-xl text-white transition-colors duration-300 hover:text-sky-500"
            >
              Contact
            </NavLink>
          </li>
          <li>
            {user && user?.email ? (
              <Link
                onClick={sinOut}
                to="/travel/login"
                className="px-4 py-2 text-gray-800 bg-warning rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Logout
              </Link>
            ) : (
              <NavLink
                to="/travel/login"
                className="px-4 py-2 text-gray-800 bg-yellow-600 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {open ? <AiOutlineClose /> : <MdMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
