import facebook from "../assets/facebook.jpg"
import { Link } from "react-router-dom"
import floa from "../assets/floa.png"

export const Footer = () => {
  return (
    <>
    <div className="flex justify-between bg-[#413A3A] p-4 items-end">
      <div className="text-[white] flex flex-col items-center w-full uppercase leading-6 phone:justify-between phone:items-end phone:flex-row">
        <p className="text-center py-5 phone:text-left phone:py-0 phone:inline-block">
          Contact<br />
          <span>Tél : <a title="Appeler" rel="nofollow" href="tel:0952304757">09.52.30.47.57&nbsp; </a> / <a title="Appeler" rel="nofollow" href="tel:0766438101">&nbsp;07.66.43.81.01</a></span> <br />
          email : <a href="mailto:contact@velofutur.com">contact@velofutur.com</a> <br />
        </p>
        <p className="flex flex-col py-5 items-center phone:items-end phone:flex-row phone:py-0">
          Paiement facilité avec Floa : <img className="h-[60px] w-[61px]" src={floa} alt="Logo de floa" />
        </p>
        <div>
          <p>
          </p>
          <p className="flex flex-col py-5 items-center phone:items-end phone:flex-row phone:py-0">
            Réseaux sociaux 
            <a href="https://www.facebook.com/velofuturdunlepalestel/">
              <img className="h-[30px] phone:pl-4" src={facebook} alt="Logo de facebook" />
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#413A3A] text-center text-white pt-5 pb-[30px]">
      <Link to="legal">Mentions légales</Link> / <a href="https://delastef.netlify.app/" target="_blank">©delastefprod 2024</a>
    </div>
    </>
  )
}
