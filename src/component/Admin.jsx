import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="dashboard-container">
        <div className=" container">
          <h1>Bienvenue Marie</h1>
          <h2>Dashboard</h2>
          <div>
            <div className="item-dashboard">
              <Link className="linkTo" to={`projets`}>
                Les projets
              </Link>
            </div>
            <div className="item-dashboard">
              <Link className="linkTo">Les utilisateurs</Link>
            </div>

            <div className="item-dashboard">
              <Link className="linkTo">Les FAQ</Link>
            </div>

            <div className="item-dashboard">
              <Link className="linkTo">Déconnexion</Link>
            </div>

            <div className="item-dashboard">
              <Link className="linkTo" to={"/"}>
                Voir le site
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Admin;
