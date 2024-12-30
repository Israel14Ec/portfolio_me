import { CardProjectT } from "../../../../types";

type TechnologieProps = {
  technologies: CardProjectT['technologies']
}

export function Technologie({ technologies} : TechnologieProps) {
  return (
    <div className=" mt-5">
      <h3 className=" text-secondary font-semibold text-lg">
        Tecnologías utilizadas:{" "}
      </h3>
      <ul className=" list-disc ml-5 text-tertiary grid md:grid-cols-2 md:gap-x-5 text-sm">
        {technologies?.map((tech, index) => (
          <li className=" text-tertiary" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
