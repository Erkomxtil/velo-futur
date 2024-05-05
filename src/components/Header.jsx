import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../assets/logo.jpg'

Header.propTypes = {
  setNav: PropTypes.func,
  nav: PropTypes.bool
}

export function Header ({setNav, nav}) {
  const mobileAction = () => {
    setNav(!nav)
  }

  return (
    <header className='z-50'>
      <div className='flex justify-center'>
        <a href="/">
          <img className='h-[120px]' src={logo} alt="Le logo de Vélo futur Dun-le-Palestel" />
        </a>
      </div>
      <nav className='bg-[#0099FF] h-8 mt-5 justify-center items-center laptop:flex laptop:relative'>
        <ul className='hidden laptop:flex justify-center gap-8 text-[white] text-[20px] uppercase absolute w-full h-[100%] bg-[rgba(0,0,0,0.8)] laptop:bg-transparent laptop:h-[unset] laptop:relative laptop:top-0 laptop:flex-row'>
          <li><NavLink className='py-[4px] px-[10px]' to="/">Accueil</NavLink></li>
          <li><NavLink className='py-[4px] px-[10px]' to="magasin">Le magasin</NavLink></li>
          <li><NavLink className='py-[4px] px-[10px]' to="route">Route</NavLink></li>
          <li><NavLink className='py-[4px] px-[10px]' to="vtt">VTT</NavLink></li>
          <li><NavLink className='py-[4px] px-[10px]' to="electrique">L&#39;Electrique</NavLink></li>
          <li><NavLink className='py-[4px] px-[10px]' to="occasion">Occasion</NavLink></li>
          <li><NavLink className='py-[4px] px-[10px]' to="contact">Contact / Informations Pratiques</NavLink></li>
        </ul>
        <div className='relative w-[20px] flex flex-col gap-1 top-[8px] laptop:hidden left-[20px]' onClick={() => mobileAction()}>
            <div className={nav ? 'transition-all rotate-45 translate-x-[-1px] translate-y-[6px] h-[2px] w-full block bg-white':'transition-all h-[2px] w-full block bg-white'}></div>
            <div className={nav ? 'hidden':'transition-all h-[2px] w-full block bg-white'}></div>
            <div className={nav ? 'transition-all rotate-[-45deg] h-[2px] w-full block bg-white':'transition-all h-[2px] w-full block bg-white'}></div>
        </div>
      </nav>
    </header>
  )
}

