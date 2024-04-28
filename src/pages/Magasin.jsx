import { Titlepage } from "../components/Titlepage";
import devanture from "../assets/devanture-magasin.jpg"

export const Magasin = () => {
  return (
    <div className="relative m-auto text-white">
      <div className="h-[400px] overflow-hidden">
        <img className="w-full blur-[4px] brightness-[.5] translate-y-[-336px]" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="px-[20px] max-w-[1200px] absolute top-0 left-[50%] translate-x-[-50%] pb-5">
        <Titlepage title="Votre magasin Vélo Futur Dun le palestel,"/>
      </div>
      <div className="flex justify-center mt-[-240px] z-20 relative ">
        <p className="text-black text-2xl font-[100] text-center mb-10">
        <img className="w-[1000px] border-solid border-white border-4" src={devanture} alt="Devanture du magasin Vélo futur" />
          Ventes, réparations, conseils, Sébastien sera à votre écoute fort de ses 27 ans d&#39;expérience dans le cycle.
        </p>
      </div>
    </div>
  );
};
