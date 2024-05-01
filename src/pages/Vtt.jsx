import { BikeCard } from "../components/BikeCard"
import zesty from "../assets/zesty.jpg"
import { Intro } from "../components/Intro"

export const Vtt = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <Intro title="Vélo VTT disponible" />
      <div className="flex flex-col items-center laptop:flex-row laptop:justify-center laptop:mt-[-100px] laptop:items-start z-20 relative">
        <BikeCard 
          title="Zesty TR 3.9" 
          image={zesty} 
          infos="Polyvalence. Simplicité. Efficacité. Et plaisir ! Voilà ce qui pourrait définir le Zesty TR 3.9. Notre modèle historique chez Lapierre sait tout faire, ou presque ! Profitez d&#39;un vélo confortable et agréable avec 120/130 mm de débattement pour vos sorties en cross-country. Le Zesty TR s&#39;adapte à vos envies et possède une géométrie proche d&#39;un All Mountain avec des accents de cross-country." 
          link="https://www.lapierrebikes.com/fr-fr/search/?query=zesty"        
        />
      </div>
    </div>
  )
}