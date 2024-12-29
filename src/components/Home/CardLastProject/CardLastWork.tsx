import { CardProject, ContainerProject } from "../../Shared";

export function CardLastWork() {
  return (
    < ContainerProject title="ÚLTIMOS PROYECTOS">
   
      <div className=" mb-20 flex flex-col md:flex-row gap-5 md:gap-16 justify-center items-start ">
        <CardProject
          img="/Projects/xPress.webp"
          title="xPress"
          description="Sistema de gestión de mantenimiento"
          to="/portfolio"
        />
        <CardProject
          img="/Projects/TechReserve.webp"
          title="TechReserve"
          description="Aplicación de reserva de laboratorios"
          to="/portfolio"
        />
        <CardProject
          img="/Projects/UpTask.webp"
          title="UpTask"
          description="Gestión de tareas"
          to="/portfolio"
        />
      </div>

    </ContainerProject>
  );
}
