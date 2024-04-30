import { Titlepage } from "../components/Titlepage"
import devanture from "../assets/devanture-magasin.jpg"
import { BikeCard } from "../components/BikeCard"
import cervelo from "../assets/occaz-cervelo.jpg"
import look from "../assets/occaz-look.jpg"
import origine from "../assets/occaz-origines.jpg"
import roues from "../assets/occaz-roues.jpg"



export const Occasion = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <div className="h-[400px] overflow-hidden">
        <img className="w-full blur-[4px] brightness-[.5] translate-y-[-336px]" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="px-[20px] max-w-[1200px] absolute top-0 left-[50%] translate-x-[-50%]">
        <Titlepage title="Vélo d'occasion"/>
        <p className="text-[40px] text-[white] uppercase">Votre magasin de vélos : <br/>vente - réparation - entretien - location</p>
        <p className="font-[100] pt-5 text-2xl">Découvrez l&#39;ensemble de la gamme de nos vélo afin de trouver celui le plus adapté à vos besoins.</p>
      </div>
      <div className="flex justify-center mt-[-100px] z-20 relative">
        <BikeCard 
          title="Cervélo SLC SL" 
          image={cervelo} 
          infos="Vélo route carbone cervelo SLC SL, pédalier manettes dérailleurs Shimano ultegra 11 vitesses." 
          link="https://www.cervelo.com/fr-FR"        
        />
        <BikeCard 
          title="Look 795" 
          image={look} 
          infos="Ses couleurs évoquent l&#39;héritage et le passé glorieux de la marque, sa conception est à la pointe de la technologie : le 795 BLADE RS ICONIC EDITION c&#39;est l&#39;histoire, le savoir-faire et le futur de LOOK Cycle, réunis dans un vélo aux performances exceptionnelles" 
          link="https://www.lookcycle.com/fr-fr/produits/velos/route/aero/795-blade-rs"        
        />
      </div>
      <div className="flex justify-center z-20 relative">
        <BikeCard 
          title="Origines Axxome 2rs" 
          image={origine} 
          infos="La signature RS désigne la formule ultime de l'Axxome dans sa version patins, plus exclusif, plus léger et encore plus rapide que son grand frère. Taillé pour la performance pure il est le cadre des cyclistes en quête de dépassement." 
          link="https://www.origine-cycles.com/fr-FR/velo/route/patins/axxome-rs"        
        />
        <BikeCard 
          title="Campagnolo Bora 33 wto dark" 
          image={roues} 
          infos="Vous roulez avec la technologie disque et vous cherchez de la polyvalence pour vos roues ? Les Campagnolo Bora WTO 33 Disc sont parfaites ! Légères avec 1455 grammes, elles offrent en plus un aérodynamisme de pointe. Le terrain de chasse des Bora WTO 33 ? La montagne assurément mais aussi tous les parcours vallonés." 
          link="https://www.campagnolo.com/fr-fr/bora-wto-33-disc-brake/WWRBORAWTO33DB.html"        
        />
      </div>
    </div>
  );
};
