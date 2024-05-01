import { Titlepage } from "../components/Titlepage"
import devanture from "../assets/devanture-magasin.jpg"

export const Magasin = () => {
  return (
    <div className="relative m-auto text-white">
      <div className="hidden laptop:block h-[400px] overflow-hidden bg-[#413A3A]">
        <img className="w-full blur-[4px] brightness-[.5] phone:translate-y-[-10px] laptop:translate-y-[-190px] hidden phone:block" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="bg-[#413A3A] px-[20px] pb-10 laptop:pb-0 laptop:bg-transparent laptop:w-full laptop:max-w-[1200px] laptop:absolute laptop:top-0 left-[50%] laptop:translate-x-[-50%]">
        <Titlepage title="Votre magasin Vélo Futur Dun le palestel,"/>
      </div>
      <div className="flex justify-center mt-[20px] laptop:mt-[-240px] z-20 relative ">
        <div className="text-black text-2xl font-[100] text-center mb-10">
          <img className="w-[1000px] border-solid border-white border-4" src={devanture} alt="Devanture du magasin Vélo futur" />
          <p className="px-[20px]">
            Ventes, réparations, conseils, Sébastien sera à votre écoute fort de ses 27 ans d&#39;expérience dans le cycle.
          </p>
        </div>
      </div>
    </div>
  )
}
