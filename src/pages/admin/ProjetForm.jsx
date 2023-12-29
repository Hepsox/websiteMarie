import axios from "axios";
import Button from "../../component/Button";
import Input from "../../component/input/Input";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import config from "../../../config";

function ProjetForm() {
  const [projet, setProjet] = useState(useLoaderData() ?? {});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProjet = { ...projet, [name]: value };

    if (name === "title") {
      updatedProjet.slug = value
        .toLowerCase()
        .split(" ")
        .map((word) => word.replace(/[^\w]/gi, ""))
        .join("-");
    }

    setProjet(updatedProjet);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (projet.id) {
        await axios.put(`${config.backend_url}/projet/${projet.id}`, projet);
      } else {
        await axios.post(`${config.backend_url}/projet`, projet);
      }
      navigate("/admin/projets");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1> {projet.id ? "Modifier le projet" : "Ajouter un projet"} </h1>
      <form className="ajout-projet" onSubmit={handleSubmit}>
        <Input
          titleInput="Nom du projet"
          handleChange={handleChange}
          name="title"
          formValues={projet}
        />
        <Input
          titleInput="Slug"
          handleChange={handleChange}
          name="slug"
          formValues={projet}
        />
        <Input
          titleInput="Sous titre"
          handleChange={handleChange}
          name="subtitle"
          formValues={projet}
        />
        <Input
          titleInput="Les objectifs"
          handleChange={handleChange}
          name="goals"
          formValues={projet}
        />
        <Input
          titleInput="La durée"
          handleChange={handleChange}
          name="duration"
          formValues={projet}
        />
        <Input
          titleInput="Languages"
          handleChange={handleChange}
          name="languages"
          formValues={projet}
        />
        <Input
          titleInput="Outils"
          handleChange={handleChange}
          name="tools"
          formValues={projet}
        />
        <Input
          titleInput="Fonctionnalités"
          handleChange={handleChange}
          name="features"
          formValues={projet}
        />
        <Button type="submit" title="Sauvegarder" />
      </form>
    </div>
  );
}

export default ProjetForm;
