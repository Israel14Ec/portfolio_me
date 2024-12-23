import { PersonalData, Presentation, Skills, Training } from "../components/About";
import { SoftSkill } from "../components/About/SoftSkill";

export default function AboutMe() {
  return (
    <main className="bg-white shadow-lg ">
      <div className="md:w-[70%] mx-auto px-5 py-16">
        <h1 className="text-primary text-4xl font-extrabold">Sobre mí</h1>
        <Presentation />

        <article className=" flex gap-5 flex-col md:flex-row border-t-2 mt-5">
          <div className=" md:w-1/2 ">
            <h3 className=" text-primary text-2xl font-semibold">Datos personales</h3>
            <PersonalData />
          </div>
          <div className="md:w-1/2">
             <h3 className=" text-primary text-2xl font-semibold">Formación</h3>
             <Training />
          </div>
        </article>
        
        <div className="border-t-2 mt-5">
          <h3 className=" text-primary text-2xl font-semibold">Habilidades</h3>
          <Skills />
        </div>

        <div className="border-t-2 mt-5">
          <h3 className=" text-primary text-2xl font-semibold">Habilidades Blandas</h3>
          <SoftSkill />
        </div>

      </div>
    </main>
  );
}
