import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'

NavMobile.propTypes = {
  setNav: PropTypes.func,
  nav: PropTypes.bool
}


export function NavMobile({setNav, nav}) {
  const settingNav = () => {
    setNav(false)
  }
  
  return (
    <div className={nav ? "absolute w-full h-full z-50 laptop:hidden": 'hidden'}>
      <div>
        <div className="w-[20px] flex flex-col top-[14px] right-[10px] absolute" onClick={() => settingNav()}>
          <div className='transition-all rotate-45 translate-x-[0px] translate-y-[2px] h-[2px] w-full block bg-white'></div>
          <div className='transition-all rotate-[-45deg] h-[2px] w-full block bg-white'></div>
        </div>
      </div>
      <ul className='flex flex-col justify-center items-center gap-8 text-white text-[20px] uppercase w-full h-[100%] bg-[rgba(0,0,0,0.8)]'>
        <li><NavLink className='py-[4px] px-[10px]' to="/">Accueil</NavLink></li>
        <li><NavLink className='py-[4px] px-[10px]' to="magasin">Le magasin</NavLink></li>
        <li><NavLink className='py-[4px] px-[10px]' to="route">Route</NavLink></li>
        <li><NavLink className='py-[4px] px-[10px]' to="vtt">VTT</NavLink></li>
        <li><NavLink className='py-[4px] px-[10px]' to="electrique">L&#39;Electrique</NavLink></li>
        <li><NavLink className='py-[4px] px-[10px]' to="occasion">Occasion</NavLink></li>
        <li><NavLink className='py-[4px] px-[10px]' to="contact">Contact / Informations Pratiques</NavLink></li>
      </ul>
    </div>
  )
}