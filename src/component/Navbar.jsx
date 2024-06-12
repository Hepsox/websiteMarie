import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navigation" id="header"></div>
      <header className="header">
        <div className="container">
          {/* <a href="" className="logo">
            <img src="/marie.jpg" alt="" />
          </a> */}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink className="item-nav" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="item-nav" to="/projet/rasta-rockett">
                Rasta Rocket
              </NavLink>
            </li>
            <li>
              <NavLink className="item-nav" to="/projet/mood-station">
                MoodStation
              </NavLink>
            </li>
            <li>
              <NavLink className="item-nav" to="/projet/externatic">
                Externatic
              </NavLink>
            </li>
            <li>
              <NavLink className="item-nav" to="/projet/elegance">
                Hackathon
              </NavLink>
            </li>
            <li>
              <NavLink className="item-nav" to="/projet/inspire">
                Inspire
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Navbar;
