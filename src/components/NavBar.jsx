import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import { BsSun, BsMoon } from "react-icons/bs";

// BsSun
// BsMoon

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const ref = useRef();

  useEffect(() => {
    localStorage.theme = 'dark';
  }, [])

  const toggleTheme = () => {
    if (localStorage.theme == 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false);
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark')
      setIsDarkMode(true);
    }
  }

  return (
    <div>
      <nav className="border-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 text-black pb-0">
                <div className="text-2xl text-gray-900 dark:text-gray-300 leading-none">LEONHARD LINK</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 leading-none">web developer</div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-12">
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive ?
                      "text-tealsat-700 dark:text-teal-600 border-b text-lg" :
                      "text-gray-900 dark:text-gray-300 hover:text-tealsat-700 dark:hover:text-teal-600 text-lg"}
                  >
                    About me
                  </NavLink>

                  <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ?
                      "text-tealsat-700 dark:text-teal-600 border-b text-lg" :
                      "text-gray-900 dark:text-gray-300 hover:text-tealsat-700 dark:hover:text-teal-600 text-lg"}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ?
                      "text-tealsat-700 dark:text-teal-600 border-b text-lg" :
                      "text-gray-900 dark:text-gray-300 hover:text-tealsat-700 dark:hover:text-teal-600 text-lg"}
                  >
                    Contact
                  </NavLink>
                  <button
                    onClick={toggleTheme}
                    type="button"
                    className="inline-flex items-center justify-center text-gray-900 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 focus:outline-none"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    {isDarkMode ?
                      <BsSun className="mx-3 my-2" color="currentColor" /> :
                      <BsMoon className="mx-3 my-2" color="currentColor" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center px-3 py-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              <NavLink
                to="/"
                className={({ isActive }) => isActive ?
                  "text-tealsat-700 dark:text-teal-600 text-lg" :
                  "block text-gray-900 dark:text-gray-300 hover:text-tealsat-700 dark:hover:text-teal-600 text-lg"}
              >
                About me
              </NavLink>

              <NavLink
                to="/projects"
                className={({ isActive }) => isActive ?
                  "text-tealsat-700 dark:text-teal-600 text-lg" :
                  "block text-gray-900 dark:text-gray-300 hover:text-tealsat-700 dark:hover:text-teal-600 text-lg"}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ?
                  "text-tealsat-700 dark:text-teal-600 text-lg" :
                  "block text-gray-900 dark:text-gray-300 hover:text-tealsat-700 dark:hover:text-teal-600 text-lg"}
              >
                Contact
              </NavLink>

              <button
                onClick={toggleTheme}
                type="button"
                className="flex items-center justify-center text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {isDarkMode ?
                  <BsSun className="text-gray-300 mx-3 my-2" /> :
                  <BsMoon className="text-gray-300 mx-3 my-2" />}
              </button>
            </div>
          </div>
        </Transition>
      </nav>

    </div>
  );
}
