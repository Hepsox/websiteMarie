import { useLoaderData } from "react-router-dom";
import Button from "../../component/Button";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";

function ProjetList() {
  const [projects, setProjects] = useState(useLoaderData());

  const handleDelete = (id) => {
    try {
      axios.delete(`${config.backend_url}/projet/${id}`);
      setProjects(projects.filter((projet) => projet.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-list-projet">
      <Link className="btn-projet add" to={`/admin/projets/ajouter`}>
        Ajouter un projet
      </Link>
      {projects.map((projet) => {
        return (
          <div key={projet.id} className="container-btn-projet">
            <h1> {projet.title}</h1>
            <Button
              title="Suprimer"
              onClick={() => {
                console.log("cocuou");
                handleDelete(projet.id);
              }}
            />
            <Link
              className="btn-projet modify"
              to={`/admin/projets/${projet.id}/modifier`}
            >
              {" "}
              Modifier{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjetList;
