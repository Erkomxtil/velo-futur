import { BikeCard } from "../components/BikeCard"
import eurban34 from "../assets/E-Urban-3.4.jpg"
import eurban44 from "../assets/E-Urban-4.4.jpg"
import overvolt from "../assets/Overvolt-HT-5.5.jpg"
import gone from "../assets/gone-mag.jpg"
import suun from "../assets/suun-elec.jpg"
import gitane from "../assets/gitane.jpg"
import { Intro } from "../components/Intro"

export const Electrique = () => {
  return (
    <div className="relative m-auto text-white mb-10">
      <Intro title="Vélo électrique" />
      <div className="flex flex-col items-center z-20 relative laptop:gap-[10px] laptop:flex-row laptop:justify-center laptop:mt-[-100px] laptop:items-start">
        <BikeCard 
          title="E-Urban 3.4 2023" 
          image={eurban34} 
          infos="L'E-Urban est un vélo à assistance électrique conçu pour se déplacer en ville. Avec son tube supérieur abaissé pour une meilleure accessibilité, ce vélo est à la fois confortable et dynamique. Equipé de lumières, de garde-boue et d'un porte bagage à l'arrière, l'E-Urban rend les déplacements plus agréables et plus sûrs. Grâce à sa polyvalence et son assistance progressive, se déplacer en ville n'a jamais été aussi simple." 
          link="https://www.lapierrebikes.com/fr-fr/o/e-urban-34-2023/"        
        />
        <BikeCard 
          title="E-Urban 4.4 2023" 
          image={eurban44} 
          infos="L'E-Urban est un vélo à assistance électrique conçu pour se déplacer en ville. Avec son tube supérieur abaissé pour une meilleure accessibilité, ce vélo est à la fois confortable et dynamique. Equipé de lumières, de garde-boue et d'un porte bagage à l'arrière, l'E-Urban rend les déplacements plus agréables et plus sûrs. Grâce à sa polyvalence et son assistance progressive, se déplacer en ville n'a jamais été aussi simple." 
          link="https://www.lapierrebikes.com/fr-fr/o/e-urban-44-2023/"        
        />
      </div>
      <div className="flex flex-col items-center z-20 relative laptop:gap-[10px] laptop:flex-row laptop:justify-center laptop:items-start">
        <BikeCard 
          title="Overvolt HT 5.5" 
          image={overvolt} 
          infos="Le VTT électrique OVERVOLT TR 5.5 de la gamme 2020 est un VTT à assistance électrique polyvalent qui s&#39;adapte facilement au niveau de son utilisateur. Ce VTT à assistance électrique est conseillé pour une utilisation All-Mountain." 
          link="https://www.lapierrebikes.com/fr-fr/search/?query=overvolt"        
        />
        <BikeCard 
          title="G-one Black Hill" 
          image={gone} 
          infos="Sans hésitation, expérimentez les sensations d&#39;un pilote grâce à une cinématique spécifiquement développée en relation avec le centre de gravité du pilote." 
          link="https://www.cycles-gitane.fr/modeles/g-one-black-hill"        
        />
      </div>
      <div className="flex flex-col items-center z-20 relative laptop:gap-[10px] laptop:flex-row laptop:justify-center laptop:items-start">
        <BikeCard 
          title="SUNN STARTS-S" 
          image={suun} 
          infos="Le SUNN START, c'est l'élégance et la praticité d'un cadre à enjambement bas allié à la performance de la motorisation BOSCH. Idéal pour tous les trajets du quotidien, le Bosch eBike System 2 allie puissance et douceur. La motorisation Bosch Active Line 250W/40Nm garantit une manipulation simplifiée grâce à son faible poids et ses dimensions réduites. Avec sa batterie Bosch Powerpack 400Wh, partez encore plus loin et profitez des accélérations hamornieuse de la motorisation Bosch." 
          link="https://www.sunn.fr/en/start-en/"        
        />
        <BikeCard 
          title="Gitane G-Life intense wave" 
          image={gitane} 
          infos="Le VTC G life intense wave est un vélo a l'aise sur les routes comme sur les chemins grâce à ses pneus Schwalbe Hurricane de 27,5x2,25 et sa fourche suspendue hydraulique 80mm, il est équipé d'un moteur pédalier Bosch performance 75 nm, la batterie intégrée de 500 wh ou 625wh vous assure une autonomie de respectivement 80 et 100 km." 
          link="https://www.cycles-gitane.fr/velos/ysg919-g-life-intense-wave"        
        />
      </div>
    </div>
  )
}

