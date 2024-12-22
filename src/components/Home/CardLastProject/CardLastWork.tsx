import { CardProject } from "../../Shared";

export function CardLastWork() {
  return (
    <section className="relative bg-neutral-50 w-full overflow-hidden rounded-lg">
      <h2 className=" font-semibolold text-secondary text-xl mb-10 text-center">ÚLTIMOS PROYECTOS</h2>

      <div className=" mb-20 flex flex-col md:flex-row gap-5 md:gap-16 justify-center items-start ">
        <CardProject
          img="/xPress.png"
          title="xPress"
          description="Sistema de gestión de mantenimiento"
        />
        <CardProject
          img="/TechReserve.png"
          title="TechReserve"
          description="Aplicación de reserva de laboratorios"
        />
        <CardProject
          img="/UpTask.png"
          title="UpTask"
          description="Gestión de tareas"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-16 w-32 bg-neutral-100 rounded-t-full shadow-inner"></div>
    </section>
  );
}
