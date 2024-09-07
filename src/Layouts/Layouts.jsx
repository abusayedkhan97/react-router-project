import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./layouts.css";

const Layouts = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="header flex justify-between bg-slate-500 text-white px-60 py-3 items-center">
          <div className="logo">
            <img src={Logo} alt="" className="w-[90px]" />
          </div>
          
          <div className="menu">
            <ul className="flex gap-2 text-2xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/user">Teams</Link>
              </li>
            </ul>
          </div>
        </div>

        <Outlet />
        
        <div className="footer text-center bg-slate-500 py-3">
          <h6 className="text-white font-light">Copyright © 2024</h6>
        </div>
      </div>
    </>
  );
};

export default Layouts;
