import { BikeCard } from "../components/BikeCard"
import cervelo from "../assets/occaz-cervelo.jpg"
import look from "../assets/occaz-look.jpg"
import origine from "../assets/occaz-origines.jpg"
import roues from "../assets/occaz-roues.jpg"
import { Intro } from "../components/Intro"

export const Occasion = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <Intro title="Vélo d'occasion" />
      <div className="flex flex-col items-center z-20 relative laptop:gap-[10px] laptop:flex-row laptop:justify-center laptop:mt-[-100px] laptop:items-start">
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
      <div className="flex flex-col items-center z-20 relative laptop:gap-[10px] laptop:flex-row laptop:justify-center laptop:items-start">
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
