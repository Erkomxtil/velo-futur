import facebook from "../assets/facebook.jpg"
import { Link } from "react-router-dom";
import floa from "../assets/floa.png"

export const Footer = () => {
  return (
    <div className="flex justify-between bg-[#413A3A] p-4 items-end">
      <div className="text-[white] flex justify-between w-full uppercase leading-6 pr-5 items-end">
        <p>
          Contact<br />
          <span>Tél : 09.52.30.47.57 / 07.66.43.81.01</span> <br />
          email : <a href="mailto:contact@velofutur.com">contact@velofutur.com</a> <br />
        </p>
        <p className="flex items-end">
          Paiement facilité avec Floa : <img className="h-[60px]" src={floa} alt="Logo de floa" />
        </p>
        <p>
          <Link to="legal">Mentions légales</Link>
        </p>
        <p className="flex items-end">
          Réseaux sociaux 
          <a href="https://www.facebook.com/velofuturdunlepalestel/">
            <img className="h-[30px] pl-4" src={facebook} alt="Logo de facebook" />
          </a>
        </p>
      </div>
    </div>
  );
};
