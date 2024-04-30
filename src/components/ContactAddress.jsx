import phone from "../assets/phone.png"
import arobase from "../assets/arobase.png"
import place from "../assets/place.png"

export const ContactAddress = () => {
  return (
    <div>
      <p  className="border-b-[1px] border-[#EFEFEF] border-solid pb-8 font-[100]">Situé sur la rue du Barreau Vert à 150 mètres de Gedimat et 260 mètres de la caisse d&#39;épargne.</p>
      <div className="flex gap-10 pt-5">
        <div >
          <h3 className="uppercase mb-5">Nous contacter</h3>
          <div>
          <p className="flex items-center mb-5 font-[100]">
            <img className="h-[30px] mr-5" src={phone} alt="" /> <a title="Appeler" rel="nofollow" href="tel:+33952304757">09.52.30.47.57&nbsp; </a> / <a title="Appeler" rel="nofollow" href="+33766438101">&nbsp;07.66.43.81.01</a> <br />
          </p>
          <p className="flex font-[100]">
            <img className="h-[30px] mr-5" src={arobase} alt="" /><a title="Envoyer un email" href="mailto:contact@velofutur.com">Par mail</a>
          </p>
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-5">Adresse</h3>
          <p className="flex items-center font-[100]">
            <img className="h-[30px] mr-5" src={place} alt="" /> 4 rue du barreau vert<br />
            23800 DUN LE PALESTEL <br />
          </p>
          <a title="Voir sur une carte" className="mt-5 block font-[100]" href="https://www.google.com/maps/place/46%C2%B018'24.9%22N+1%C2%B039'59.1%22E/@46.3070896,1.6658768,149m/data=!3m1!1e3!4m4!3m3!8m2!3d46.3069167!4d1.6664167?entry=ttu" target="_blank">Voir sur une carte</a>
        </div>
      </div>
    </div>
  )
}

