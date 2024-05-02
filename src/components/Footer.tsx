import logo from "../assets/icons/logo-now.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper | mt-[3rem] text-[0.75rem]">
      <div className="footer-container | default-container">
        <div className="footer-inner | bg-purple-600 rounded-t-2xl p-[1rem] lg:p-[2rem] flex flex-col items-center lg:flex-row lg:justify-between text-white">
          <Link to="/">
            <img className="max-w-[6rem]" src={logo} alt="logo-image" />
          </Link>
          <ul className="footer-links | flex flex-col lg:flex-row lg:gap-[1.5rem]">
            <li>
              <a href="#">Политика конфидециальности</a>
            </li>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
