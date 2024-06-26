import devanture from "../assets/devanture-magasin.jpg"
import { Titlepage } from "../components/Titlepage"

export const Legal = () => {
  return (
    <>
      <div className="relative">
        <div className="hidden laptop:block h-[400px] overflow-hidden bg-[#413A3A]">
          <img className="w-full blur-[4px] brightness-[.5] phone:translate-y-[-10px] laptop:translate-y-[-190px] hidden phone:block" src={devanture} alt="Devanture du magasin de Vélo futur" />
        </div>
        <div className="bg-[#413A3A] px-[20px] pb-[30px] laptop:pb-0 laptop:bg-transparent laptop:w-full laptop:max-w-[1200px] laptop:absolute laptop:top-0 left-[50%] laptop:translate-x-[-50%] text-white">
          <Titlepage title="Mentions légales" />
        </div>
      </div>
      <div className="flex m-auto max-w-[1200px] px-[20px] pb-10">
        <p className="mt-[30px] block font-[100] leading-6">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&#39;économie numérique, il est précisé aux utilisateurs du site VELOFUTUR l&#39;identité des différents intervenants dans le cadre de sa réalisation et de son suivi. <br />
          <h2 className="text-2xl mt-5 mb-2 font-medium">Edition du site</h2>
          Le présent site, accessible à l&#39;URL www.velofutur.com (le « Site »), est édité par : <br />
          VELO FUTUR, société au capital de 8000 euros, inscrite au R.C.S. de GUERET sous le numéro Gueret B 480 512 102, dont le siège social est situé au 4 RUE DU BARREAU VERT 23800 DUN-LE-PALESTEL, représenté(e) par Sébastien PETIT Gérant de l&#39;entreprise VELO FUTUR dûment habilité <br />
          Le numéro individuel TVA de l&#39;éditeur est : FR15480512102.
          <h2 className="text-2xl mt-5 mb-2 font-medium">Hébergement</h2>
          Le Site est hébergé par la société PHPNET France - Nuxit, situé Groupe Magic Online 97 - 97 Bis rue Général Mangin 38100 Grenoble, (contact téléphonique ou email : +33486576000).
          <h2 className="text-2xl mt-5 mb-2 font-medium">Directeur de publication</h2>
          Le Directeur de la publication du Site est Sébastien PETIT Gérant de l&#39;entreprise VELO FUTUR.
          <h2 className="text-2xl mt-5 mb-2 font-medium">Nous contacter</h2>
          Par téléphone : +33766438101 <br />
          Par email : contact@velofutur.com <br />
          Par courrier : 4 RUE DU BARREAU VERT 23800 DUN-LE-PALESTEL
        </p>
      </div>
    </>
  )
}
