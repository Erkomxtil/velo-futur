import { BikeCard } from "../components/BikeCard"
import crosshill from "../assets/crosshill.jpg"
import { Intro } from "../components/Intro"

export const VeloRoute = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <Intro title="Vélo de route disponible"/>
      <div className="flex flex-col items-center laptop:flex-row laptop:justify-center laptop:mt-[-100px] laptop:items-start z-20 relative">
        <BikeCard 
          title="Crosshill 5.0 2023" 
          image={crosshill} 
          infos="Le Lapierre CROSSHILL 5.0 est un vélo Lapierre, savant mélange entre un vélo de route et de cyclo-cross, ce nouveau gravel sera rapide et amusant à rouler, quel que soit le terrain !" 
          link="https://www.lapierrebikes.com/fr-fr/search/?query=crosshill"        
        />
      </div>
    </div>
  )
}

