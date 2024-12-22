import { CardProject } from "../../Shared";

export function CardLastWork() {
  return (
    <div className=" bg-neutral-50 shadow-sm w-full p-5 absolute overflow-hidden rounded-lg">
      <p className=" font-semibolold text-secondary text-lg mb-10 text-center">ÚLTIMOS PROYECTOS</p>

      <div className=" mb-16 flex flex-col md:flex-row gap-5 md:gap-16 justify-center items-start ">
        <CardProject
          img="/xPress.png"
          title="xPress"
          description="CMMS (Computerized Maintenance Managament System)"
        />
        <CardProject
          img="/TechReserve.png"
          title="TechReserve"
          description="Aplicación de reserva de laboratorios"
        />
        <CardProject
          img="/TechReserve.png"
          title="MusicEl"
          description="Reproductor de música"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-16 w-32 bg-neutral-100 rounded-t-full  shadow-lg"></div>
    </div>
  );
}
