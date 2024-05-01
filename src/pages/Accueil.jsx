import { BikeCard } from "../components/BikeCard"
import gone from "../assets/g-one.jpg"
import origine from "../assets/origine.jpg"
import { LogoPartner } from "../components/LogoPartner"
import { Intro } from "../components/Intro"

export const Accueil = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <Intro title="Vélo Futur Dun le palestel,"/>
      <div className="flex flex-col items-center z-20 relative laptop:gap-[10px] laptop:flex-row laptop:justify-center laptop:mt-[-100px] laptop:items-start">
        <BikeCard 
          title="G-one Black Hill" 
          image={gone} 
          infos="Sans hésitation, expérimentez les sensations d&#39;un pilote grâce à une cinématique spécifiquement développée en relation avec le centre de gravité du pilote." 
          link="https://www.cycles-gitane.fr/modeles/g-one-black-hill"        
        />
        <BikeCard 
          title="Origine axxome 2RS occasion" 
          image={origine} 
          infos="La signature RS désigne la formule ultime de l&#39;Axxome dans sa version patins, plus exclusif, plus léger et encore plus rapide que son grand frère. Taillé pour la performance pure il est le cadre des cyclistes en quête de dépassement." 
          link="https://www.origine-cycles.com/fr-FR/velo/route/patins/axxome-rs"        
        />
      </div>
      <div className="px-5">
        <h2 className="text-black text-2xl font-[100] text-center">Nous sommes également revendeur officiel des marques suivantes :</h2>
        <LogoPartner />
      </div>
    </div>
  )
}

