import logo from "../assets/icons/logo-now.svg";
import menuIcon from "../assets/icons/menu-icon.svg";
import searchIcon from "../assets/icons/search-icon-black.svg";
import corner from "../assets/images/fucking_corner.svg";

const Navbar = () => {
  return (
    <div className="navbar-wrapper | cofo-sans-regular w-full">
      <div className="navbar-container | default-container">
        <div className="navbar-inner | flex justify-between gap-[2rem] items-center py-[1rem]">
          <div className="logo | bg-purple-600 p-[0.5rem] rounded-full">
            <img src={logo} alt="logo-image" />
          </div>
          <nav className="navigation | lg:flex-grow lg:bg-[#F7F7F7] lg:rounded-full -z-[0] pr-[1rem]">
            <div className="mobile-navigation | lg:hidden">
              <div className="mobile-icons | flex gap-[0.5rem] flex-row-reverse">
                <div className="icon-block | bg-[#F7F7F7] p-[0.75rem] rounded-full">
                  <img src={menuIcon} alt="burger-menu-icon" />
                </div>
                <div className="icon-block | bg-[#F7F7F7] p-[0.75rem] rounded-full">
                  <img src={searchIcon} alt="search-icon" />
                </div>
              </div>
              <div className="mobile-burger-menu | bg-red-400 absolute w-full top-[5rem] left-0 lg:hidden">
                <ul className="burger-items | default-container flex flex-col items-start gap-[1rem]">
                  <li className="burger-items | ">
                    <a className="burger-link" href="#">
                      КАТЕГОРИЯ 1
                    </a>
                  </li>
                  <li className="burger-items | ">
                    <a className="burger-link" href="#">
                      КАТЕГОРИЯ 2
                    </a>
                  </li>
                  <li className="burger-items | ">
                    <a className="burger-link" href="#">
                      КАТЕГОРИЯ 3
                    </a>
                  </li>
                  <li className="burger-items | ">
                    <a className="burger-link" href="#">
                      КАТЕГОРИЯ 4
                    </a>
                  </li>
                  <li className="burger-items | ">
                    <a className="burger-link" href="#">
                      КАТЕГОРИЯ 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="desktop-navigation | hidden lg:flex lg:items-center">
              <ul className="nav-links | flex gap-[1rem] flex-grow items-center">
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black hover:text-white group-hover:bg-[#17C4AF] rounded-t-3xl p-[0.5rem] py-[0.7em] transition-all">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 1
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[3rem] w-[2rem] absolute top-[0.75rem] left-[6.9rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[3.35rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem]">
                    <ul className="dropdown-list | ">
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black hover:text-white group-hover:bg-[#17C4AF] rounded-t-3xl p-[0.5rem] py-[0.7em] transition-all">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 2
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[3rem] w-[2rem] absolute top-[0.75rem] left-[6.9rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[3.35rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem]">
                    <ul className="dropdown-list | ">
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black hover:text-white group-hover:bg-[#17C4AF] rounded-t-3xl p-[0.5rem] py-[0.7em] transition-all">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 3
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[3rem] w-[2rem] absolute top-[0.75rem] left-[6.9rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[3.35rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem]">
                    <ul className="dropdown-list | ">
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black hover:text-white group-hover:bg-[#17C4AF] rounded-t-3xl p-[0.5rem] py-[0.7em] transition-all">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 4
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[3rem] w-[2rem] absolute top-[0.75rem] left-[6.9rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[3.35rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem]">
                    <ul className="dropdown-list | ">
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item text-white group">
                  <div className="nav-link-title relative text-black hover:text-white group-hover:bg-[#17C4AF] rounded-t-3xl p-[0.5rem] py-[0.7em] transition-all">
                    <a className="nav-link | " href="#">
                      КАТЕГОРИЯ 5
                    </a>
                    <img
                      className="transition-all opacity-0 group-hover:opacity-100 h-[3rem] w-[2rem] absolute top-[0.75rem] left-[6.9rem] -z-10"
                      src={corner}
                      alt=""
                    />
                  </div>
                  <div className="nav-link-dropdown | transition-all opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto absolute top-[3.35rem] bg-[#17C4AF] rounded-b-2xl rounded-tr-xl p-[0.5rem] pt-[0.75rem] mt-[0.55rem]">
                    <ul className="dropdown-list | ">
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 1
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 2
                        </a>
                      </li>
                      <li className="dropdown-list-item | ">
                        <a className="dropdown-list-link" href="#">
                          ПОДКАТЕГОРИЯ 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li className="nav-link">
                  <a href="">КАТЕГОРИЯ 2</a>
                </li>
                <li className="nav-link">
                  <a href="">КАТЕГОРИЯ 3</a>
                </li>
                <li className="nav-link">
                  <a href="">КАТЕГОРИЯ 4</a>
                </li>
                <li className="nav-link">
                  <a href="">КАТЕГОРИЯ 5</a>
                </li> */}
              </ul>
              <div className="icon-block | rounded-full">
                <img src={searchIcon} alt="search-icon" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
