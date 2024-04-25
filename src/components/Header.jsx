import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export const Header = () => {
  return (
    <header>
      <div className='flex justify-center'>
        <a href="/">
          <img className='h-[120px]' src={logo} alt="Le logo de Vélo futur Dun le Palestel" />
        </a>
      </div>
      <nav className='flex bg-[#0099FF] h-8 mt-5 justify-center items-center'>
        <ul className='flex justify-center gap-8 text-[white] text-[20px] uppercase'>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="magasin">Le magasin</NavLink></li>
          <li><NavLink to="route">Route</NavLink></li>
          <li><NavLink to="vtt">VTT</NavLink></li>
          <li><NavLink to="electrique">L&#39;Electrique</NavLink></li>
          <li><NavLink to="occasion">Occasion</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

