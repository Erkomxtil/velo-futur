import { Infos } from "../components/Infos"
import { ContactAddress } from "../components/ContactAddress";
import { Titlepage } from "../components/Titlepage";

export const Contact = () => {
  return (
    <div className="px-[20px] max-w-[1200px] m-auto">
      <Titlepage title="Informations pratiques"/>
      <div className="flex justify-between">
        <ContactAddress />
        <Infos />
      </div>
    </div>
  );
};

