import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navigation">
      <NavLink className="item-nav" to="/">
        Home
      </NavLink>

      <NavLink className="item-nav" to="/projet/rasta-rockett">
        Projet 1
      </NavLink>
      <NavLink className="item-nav" to="/projet/mood-station">
        Projet 2
      </NavLink>
      <NavLink className="item-nav" to="/projet/externatic">
        Projet 3
      </NavLink>
    </div>
  );
}
export default Navbar;
