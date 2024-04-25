import facebook from "../assets/facebook.jpg"

export const Footer = () => {
  return (
    <div className="flex justify-between bg-[#413A3A] p-4">
      <div className="text-[white] flex justify-between w-full uppercase leading-6 pr-5">
        <p>
          Contact<br />
          <span>Tél : 09.52.30.47.57 / 07.66.43.81.01</span> <br />
          email : <a href="mailto:contact@velofutur.com">contact@velofutur.com</a> <br />
        </p>
        <p>
          <a href="/legal">Mentions légales</a>
        </p>
        <p>
          Réseaux sociaux <br />
          <a href="https://www.facebook.com/velofuturdunlepalestel/">
            <img className="h-[30px]" src={facebook} alt="Logo de facebook" />
          </a>
        </p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d648.8434204301273!2d1.6658768!3d46.3070896!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDE4JzI0LjkiTiAxwrAzOSc1OS4xIkU!5e1!3m2!1sfr!2sfr!4v1714062628292!5m2!1sfr!2sfr" width={400} height={300} ></iframe>

    </div>
  );
};
