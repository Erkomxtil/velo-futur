import logoCervelo from "../assets/logo-cervelo.jpg"
import logoLapierre from "../assets/logo-lapierre.jpg"
import logoLook from "../assets/logo-look.jpg"
import logoGone from "../assets/logo-gone.jpg"
import logoSunn from "../assets/logo-sunn.jpg"
import logoShimano from "../assets/logo-shimano.jpg"
import logoMavic from "../assets/logo-mavic.jpg"
import logoMichelin from "../assets/logo-michelin.jpg"

export const LogoPartner = () => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <a href="https://www.cervelo.com/fr-FR"><img src={logoCervelo} alt="Logo Cervélo" /></a>
      <a href="https://www.lapierrebikes.com/fr-fr/"><img src={logoLapierre} alt="Logo LaPierre" /></a>
      <a href="https://www.lookcycle.com/fr-fr/"><img src={logoLook} alt="Logo Look" /></a>
      <a href="https://www.cycles-gitane.fr/"><img src={logoGone} alt="Logo G-one" /></a>
      <a href="https://www.sunn.fr/fr/"><img src={logoSunn} alt="Logo Sunn" /></a>
      <a href="https://bike.shimano.com/fr-FR/home.html"><img src={logoShimano} alt="Logo Shimano" /></a>
      <a href="https://www.mavic.com/fr-fr"><img src={logoMavic} alt="Logo Mavic" /></a>
      <a href="https://www.michelin.fr/bicycle/accueil-velo"><img src={logoMichelin} alt="Logo Michelin" /></a>
  </div>
  );
};

