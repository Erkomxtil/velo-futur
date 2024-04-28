import { Titlepage } from "../components/Titlepage";
import { BikeCard } from "../components/BikeCard";
import devanture from "../assets/devanture-magasin.jpg"
import zesty from "../assets/zesty.jpg"

export const Vtt = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <div className="h-[400px] overflow-hidden">
        <img className="w-full blur-[4px] brightness-[.5] translate-y-[-336px]" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="px-[20px] max-w-[1200px] absolute top-0 left-[50%] translate-x-[-50%]">
        <Titlepage title="Vélo VTT disponible"/>
        <p className="text-[40px] text-[white] uppercase">Votre magasin de vélos : vente - réparation - entretien - location</p>
        <p className="font-[100] pt-5 text-2xl">Découvrez l&#39;ensemble de la gamme de nos vélo afin de trouver celui le plus adapté à vos besoins.</p>
      </div>
      <div className="flex justify-center mt-[-100px] z-20 relative">
        <BikeCard 
          title="Zesty TR 3.9" 
          image={zesty} 
          infos="Polyvalence. Simplicité. Efficacité. Et plaisir ! Voilà ce qui pourrait définir le Zesty TR 3.9. Notre modèle historique chez Lapierre sait tout faire, ou presque ! Profitez d&#39;un vélo confortable et agréable avec 120/130 mm de débattement pour vos sorties en cross-country. Le Zesty TR s&#39;adapte à vos envies et possède une géométrie proche d&#39;un All Mountain avec des accents de cross-country." 
          link="https://www.lapierrebikes.com/fr-fr/search/?query=zesty"        
        />
      </div>
    </div>
  );
}