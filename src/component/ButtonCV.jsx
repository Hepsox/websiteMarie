import { Link } from "react-router-dom";

const ButtonCV = () => {
  const filePath = "/" + `CV-Marie-Delaire.pdf`;

  return (
    <Link className="btn-cv" to={filePath} target="_blank">
      Télécharger mon CV
    </Link>
  );
};

export default ButtonCV;
