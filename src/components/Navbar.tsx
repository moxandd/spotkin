import logo from "../assets/icons/logo-now.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import closeIcon from "../assets/icons/menu-close-icon.svg";
import searchIcon from "../assets/icons/search-icon-black.svg";
import corner from "../assets/images/fucking_corner.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useEffect } from "react";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";

interface NavbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ search, setSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Forbid scrolling while the menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [menuOpen]);

  return (
    <div className="navbar-wrapper | cofo-sans-regular w-full">
      <div className="navbar-container | default-container">
        <div className="navbar-inner | flex justify-between gap-[2rem] items-center py-[1rem]">
          <div className="logo | bg-purple-600 p-[0.5rem] rounded-full">
            <Link to="/">
              <img className="w-[5rem]" src={logo} alt="logo-image" />
            </Link>
          </div>
          <nav className="navigation | lg:flex-grow lg:bg-[#F7F7F7] lg:rounded-full -z-[0] pr-[1rem]">
            <div className="mobile-navigation | lg:hidden">
              <div className="mobile-icons | flex gap-[0.5rem] flex-row-reverse">
                <div className="icon-block | bg-[#F7F7F7] p-[0.75rem] rounded-full">
                  <img
                    onClick={() => setMenuOpen(!menuOpen)}
                    src={menuOpen ? closeIcon : menuIcon} // Use ternary operator to switch icons
                    alt={menuOpen ? "close icon" : "burger menu icon"} // Change the alt text accordingly
                  />
                </div>
                <div className="icon-block | bg-[#F7F7F7] p-[0.75rem] rounded-full">
                  <img
                    onClick={() => setShowModal(!showModal)}
                    src={searchIcon}
                    alt="search-icon"
                  />
                </div>
              </div>
              {menuOpen ? <MobileMenu></MobileMenu> : null}
            </div>
            <div className="desktop-navigation | text-[0.75rem] hidden lg:flex lg:items-center">
              <ul className="nav-links | flex gap-[1rem] flex-grow items-center">
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black group-hover:text-white group-hover:bg-[#17C4AF] rounded-t-2xl p-[0.5rem] py-[0.7em] transition-all px-[0.9rem]">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 1
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[2rem] w-[2rem] absolute top-[0.3rem] left-[5.73rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[2.6rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem] pb-[0.75rem]">
                    <ul className="dropdown-list | flex flex-col gap-[0.5rem]">
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black group-hover:text-white group-hover:bg-[#17C4AF] rounded-t-2xl p-[0.5rem] py-[0.7em] transition-all px-[0.9rem]">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 2
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[2rem] w-[2rem] absolute top-[0.3rem] left-[5.73rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[2.6rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem] pb-[0.75rem]">
                    <ul className="dropdown-list | flex flex-col gap-[0.5rem]">
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black group-hover:text-white group-hover:bg-[#17C4AF] rounded-t-2xl p-[0.5rem] py-[0.7em] transition-all px-[0.9rem]">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 3
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[2rem] w-[2rem] absolute top-[0.3rem] left-[5.73rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[2.6rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem] pb-[0.75rem]">
                    <ul className="dropdown-list | flex flex-col gap-[0.5rem]">
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black group-hover:text-white group-hover:bg-[#17C4AF] rounded-t-2xl p-[0.5rem] py-[0.7em] transition-all px-[0.9rem]">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 4
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[2rem] w-[2rem] absolute top-[0.3rem] left-[5.73rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[2.6rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem] pb-[0.75rem]">
                    <ul className="dropdown-list | flex flex-col gap-[0.5rem]">
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a
                          className="dropdown-list-link | hover:bg-[#5AD5C6] p-[0.25rem] rounded-md"
                          href="#"
                        >
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="icon-block | rounded-full">
                <img
                  onClick={() => setShowModal(!showModal)}
                  className="w-[0.75rem] cursor-pointer"
                  src={searchIcon}
                  alt="search-icon"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <SearchModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        setSearch={setSearch}
      ></SearchModal>
    </div>
  );
};

export default Navbar;
