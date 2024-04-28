import { Titlepage } from "../components/Titlepage";
import { BikeCard } from "../components/BikeCard";
import devanture from "../assets/devanture-magasin.jpg"
import crosshill from "../assets/crosshill.jpg"

export const VeloRoute = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <div className="h-[400px] overflow-hidden">
        <img className="w-full blur-[4px] brightness-[.5] translate-y-[-336px]" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="px-[20px] max-w-[1200px] absolute top-0 left-[50%] translate-x-[-50%]">
        <Titlepage title="Vélo de route disponible"/>
        <p className="text-[40px] text-[white] uppercase">Votre magasin de vélos : vente - réparation - entretien - location</p>
        <p className="font-[100] pt-5 text-2xl">Découvrez l&#39;ensemble de la gamme de nos vélo afin de trouver celui le plus adapté à vos besoins.</p>
      </div>
      <div className="flex justify-center mt-[-100px] z-20 relative">
        <BikeCard 
          title="Crosshill 5.0 2023" 
          image={crosshill} 
          infos="Le Lapierre CROSSHILL 5.0 est un vélo Lapierre, savant mélange entre un vélo de route et de cyclo-cross, ce nouveau gravel sera rapide et amusant à rouler, quel que soit le terrain !" 
          link="https://www.lapierrebikes.com/fr-fr/search/?query=crosshill"        
        />
      </div>
    </div>
  );
};

