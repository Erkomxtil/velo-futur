import PropTypes from 'prop-types'
import { Titlepage } from "./Titlepage"
import devanture from "../assets/devanture-magasin.jpg"

Intro.propTypes = {
  title: PropTypes.string.isRequired
}

export function Intro({title}) {
  return (
    <>
      <div className="hidden laptop:block h-[400px] overflow-hidden bg-[#413A3A]">
        <img className="w-full blur-[4px] brightness-[.5] phone:translate-y-[-10px] laptop:translate-y-[-190px] hidden phone:block" src={devanture} alt="Devanture du magasin de Vélo futur" />
      </div>
      <div className="bg-[#413A3A] px-[20px] pb-[30px] laptop:pb-0 laptop:bg-transparent laptop:w-full laptop:max-w-[1200px] laptop:absolute laptop:top-0 left-[50%] laptop:translate-x-[-50%]">
        <Titlepage title={title}/>
        <p className="text-[26px] text-[white] uppercase text-center mt-[30px]">Votre magasin de vélos : <br/> vente - réparation - entretien - location</p>
        <p className="font-[100] pt-5 text-2xl text-center">Découvrez l&#39;ensemble de la gamme de nos vélos afin de trouver celui le plus adapté à vos besoins.</p>
      </div>
    </>
  )
}

