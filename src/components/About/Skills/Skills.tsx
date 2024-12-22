import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaVuejs,
  FaReact,
  FaLaravel,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { VerticalTextIcon } from "../../Shared";

export function Skills() {
  return (
    <div className=" mt-5 flex flex-col md:flex-row gap-10">
      <div className=" md:w-1/3 md:border-r-2">
        <p className=" text-lg text-tertiary mb-5">Frontend</p>
        <div className=" flex flex-wrap gap-6  ">
          <VerticalTextIcon
            icon={<FaHtml5 />}
            text="HTML"
            className=" text-orange-500"
          />
          <VerticalTextIcon
            icon={<FaCss3Alt />}
            text="CSS"
            className=" text-blue-700"
          />

          <VerticalTextIcon
            icon={<FaSass />}
            text="SCSS"
            className=" text-pink-700"
          />

          <VerticalTextIcon
            icon={<SiTailwindcss />}
            text="TailwindCss"
            className=" text-blue-700"
          />

          <VerticalTextIcon
            icon={<FaVuejs />}
            text="Vue.js"
            className=" text-green-500"
          />

          <VerticalTextIcon
            icon={<FaReact />}
            text="React"
            className=" text-blue-800"
          />

          <VerticalTextIcon
            icon={<SiNextdotjs />}
            text="Next.js"
            className=" text-gray-800"
          />
        </div>
      </div>

      <div className="md:w-1/3 md:border-r-2">
        <p className=" text-lg text-tertiary mb-5">Backend</p>
        <div className=" flex flex-wrap gap-6">
          <VerticalTextIcon
            icon={<SiExpress />}
            text="Express.js"
            className=" text-gray-800"
          />
          <VerticalTextIcon
            icon={<FaLaravel />}
            text="Laravel"
            className=" text-red-600"
          />
          <VerticalTextIcon
            icon={<SiPostgresql />}
            text="PostgreSQL"
            className=" text-blue-600"
          />
          <VerticalTextIcon
            icon={<SiMysql />}
            text="MySQL"
            className=" text-blue-700"
          />
          <VerticalTextIcon
            icon={<SiMongodb />}
            text="MongoDB"
            className=" text-green-600"
          />
        </div>
      </div>

      <div className="md:w-1/3">
        <p className=" text-lg text-tertiary mb-5">Lenguajes de programación</p>
        <div className=" flex flex-wrap gap-6">

          <VerticalTextIcon
            icon={<FaJs />}
            text="JavaScript"
            className=" text-yellow-500"
          />

          <VerticalTextIcon
            icon={<SiTypescript />}
            text="TypeScript"
            className=" text-blue-700"
          />

          <VerticalTextIcon
            icon={<FaPhp />}
            text="Php"
            className=" text-purple-700"
          />

          <VerticalTextIcon
            icon={<FaPython />}
            text="Python"
            className=" text-blue-600"
          />

          <VerticalTextIcon
            icon={<FaJava />}
            text="Java"
            className=" text-orange-600"
          />
        </div>
      </div>
    </div>
  );
}
