const MobileMenu = () => {
  return (
    <div className="mobile-burger-menu | bg-white h-full absolute w-full top-[4rem] left-0 lg:hidden py-[1rem]">
      <ul className="burger-items | default-container flex flex-col items-start gap-[1rem]">
        <li className="burger-items | w-full flex flex-col gap-[0.75rem]">
          <a className="burger-link | cofo-sans-bold text-[1.25rem]" href="#">
            КАТЕГОРИЯ 1
          </a>
          <ul className="mobile dropdown-list | text-[1rem] gap-[0.75rem] grid grid-cols-2 sm:grid-cols-3 sm:gap-[1.25rem]">
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
            <li className="dropdown-list-item | ">
              <a className="dropdown-list-link" href="#">
                ПОДКАТЕГОРИЯ 4
              </a>
            </li>
          </ul>
        </li>
        <li className="burger-items | w-full flex flex-col gap-[0.75rem]">
          <a className="burger-link | cofo-sans-bold text-[1.25rem]" href="#">
            КАТЕГОРИЯ 2
          </a>
          <ul className="mobile dropdown-list | text-[1rem] gap-[0.75rem] grid grid-cols-2 sm:grid-cols-3 sm:gap-[1.25rem]">
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
            <li className="dropdown-list-item | ">
              <a className="dropdown-list-link" href="#">
                ПОДКАТЕГОРИЯ 4
              </a>
            </li>
          </ul>
        </li>
        <li className="burger-items | w-full flex flex-col gap-[0.75rem]">
          <a className="burger-link | cofo-sans-bold text-[1.25rem]" href="#">
            КАТЕГОРИЯ 3
          </a>
          <ul className="mobile dropdown-list | text-[1rem] gap-[0.75rem] grid grid-cols-2 sm:grid-cols-3 sm:gap-[1.25rem]">
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
            <li className="dropdown-list-item | ">
              <a className="dropdown-list-link" href="#">
                ПОДКАТЕГОРИЯ 4
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
