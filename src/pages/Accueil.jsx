import { Titlepage } from "../components/Titlepage"
import devanture from "../assets/devanture-magasin.jpg"
import { BikeCard } from "../components/BikeCard";
import gone from "../assets/g-one.jpg"
import origine from "../assets/origine.jpg"
import { LogoPartner } from "../components/LogoPartner"

export const Accueil = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <div className="h-[400px] overflow-hidden">
        <img className="w-full blur-[4px] brightness-[.5] translate-y-[-336px]" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="px-[20px] max-w-[1200px] absolute top-0 left-[50%] translate-x-[-50%]">
        <Titlepage title="Vélo Futur Dun le palestel,"/>
        <p className="text-[40px] text-[white] uppercase">Votre magasin de vélos : vente - réparation - entretien - location</p>
        <p className="font-[100] pt-5 text-2xl">Découvrez l&#39;ensemble de la gamme de nos vélo afin de trouver celui le plus adapté à vos besoins.</p>
      </div>
      <div className="flex justify-center mt-[-100px] z-20 relative">
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
      <div>
        <h2 className="text-black text-2xl font-[100] text-center">Nous sommes également revendeur officiel des marques suivantes :</h2>
        <LogoPartner />
      </div>
    </div>
  );
};

