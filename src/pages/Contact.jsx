import { Infos } from "../components/Infos"
import { ContactAddress } from "../components/ContactAddress";
import { Titlepage } from "../components/Titlepage";
import devanture from "../assets/devanture-magasin.jpg"

export const Contact = () => {
  return (
    <div className="relative m-auto text-white">
      <div className="h-[400px] overflow-hidden">
        <img className="w-full blur-[4px] brightness-[.5] translate-y-[-336px]" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="px-[20px] max-w-[1200px] absolute top-0 left-[50%] translate-x-[-50%]">
        <Titlepage title="Informations pratiques"/>
      </div>
      <div className="flex justify-center mt-[-200px] z-20 relative">
        <div className="px-[20px] max-w-[1200px] m-auto bg-white text-black pt-10">
          <div className="flex justify-between">
            <ContactAddress />
            <Infos />
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2099.402250988946!2d1.665877!3d46.30709!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDE4JzI0LjkiTiAxwrAzOSc1OS4xIkU!5e1!3m2!1sfr!2sfr!4v1714398162534!5m2!1sfr!2sfr" width="100%" height={600} allowfullscreen="false" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

