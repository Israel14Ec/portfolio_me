import { FaFileDownload } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { GitHubList } from "./GitHubList";
import { CardProjectT } from "../../../types";
import { Technologie } from "./Technologie";
import { Link } from "react-router-dom";

type MainBannerprops = {
  title: CardProjectT["title"];
  description: CardProjectT["description"];
  img: CardProjectT["img"];
  technologies?: CardProjectT["technologies"];
  gitHubLinks?: CardProjectT["gitHubLink"];
  link?: CardProjectT["link"];
  linkDownload?: CardProjectT["linkDownload"];
};

export function MainBanner({
  title,
  description,
  img,
  technologies,
  gitHubLinks,
  link,
  linkDownload,
}: MainBannerprops) {
  return (
    <>
      <div className=" flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Slide direction="right" triggerOnce>
            <h1 className=" text-4xl text-primary font-semibold border-b-2 p-2">
              {title}
            </h1>
            <p className=" text-secondary mt-5">{description} </p>

            {technologies && <Technologie technologies={technologies} />}

            {gitHubLinks && (
              <div className=" mt-5">
                <p className=" text-lg text-secondary">
                  Explora el Código Fuente en GitHub
                </p>
                <GitHubList gitHubLinks={gitHubLinks} />
              </div>
            )}

            {link && (
              <div className=" mt-8">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-700 cursor-pointer hover:text-blue-600"
                >
                  Ver aplicación
                </a>
              </div>
            )}

            {linkDownload && (
              <div className=" mt-10">
                {linkDownload && (
                  <a
                    href={linkDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-700 hover:bg-gray-500 px-5 py-2 rounded-lg flex items-center justify-center text-white mt-10  gap-3"
                  >
                    <FaFileDownload size={20} />
                    <p>Descargar</p>
                  </a>
                )}
              </div>
            )}
          </Slide>
        </div>
        <div className=" md:w-1/2">
          <Slide direction="left" triggerOnce>
            <img
              src={img}
              className=" w-full opacity-90 rounded-lg shadow-md shadow-zinc-500"
            />
            <Link
              to="/contact"
              className="text-secondary text-xs hover:text-primary hover:font-semibold"
            >
              <p className=" text-center mt-5">
                Contactate para más información
              </p>
            </Link>
          </Slide>
        </div>
      </div>
    </>
  );
}
