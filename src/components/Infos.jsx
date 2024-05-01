export const Infos = () => {
  return (
    <div className="w-full phone:w-[500px]">
      <h2 className="text-center uppercase mb-8">Horaires d&#39;ouverture</h2>
      <div className="flex border-t-[1px] border-[#EFEFEF] border-solid h-[50px] items-center">
        <div className="flex-1 pl-4">Lundi</div>
        <div className="flex-[2]">Fermé</div>
      </div>
      <div className="flex h-[50px] items-center bg-[#EFEFEF]">
        <div className="flex-1 pl-4">Mardi</div>
        <div className="flex-[2]">09h00 - 12h30 & 14h30 - 19h00</div>
      </div>
      <div className="flex h-[50px] items-center">
        <div className="flex-1 pl-4">Mercredi</div>
        <div className="flex-[2]">09h00 - 12h30 & 14h30 - 19h00</div>
      </div>
      <div className="flex h-[50px] items-center bg-[#EFEFEF]">
        <div className="flex-1 pl-4">Jeudi</div>
        <div className="flex-[2]">09h00 - 12h30 & 14h30 - 19h00</div>
      </div>
      <div className="flex h-[50px] items-center">
        <div className="flex-1 pl-4">Vendredi</div>
        <div className="flex-[2]">09h00 - 12h30 & 14h30 - 19h00</div>
      </div>
      <div className="flex h-[50px] items-center bg-[#EFEFEF]">
        <div className="flex-1 pl-4">Samedi</div>
        <div className="flex-[2]">09h00 - 12h30 & 14h30 - 18h00</div>
      </div>
      <div className="flex border-b-[1px] border-[#EFEFEF] border-solid h-[50px] items-center ">
        <div className="flex-1 pl-4">Dimanche</div>
        <div className="flex-[2]">Fermé</div>
      </div>

    </div>
  )
}

