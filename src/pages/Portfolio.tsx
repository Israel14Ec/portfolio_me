import { LeftInfo, ListProjects, RightInfo } from "../components/Porfolio";
import { Slide } from "react-awesome-reveal";

export default function Portfolio() {
  return (
    <>
      <main className=" bg-white p-5 shadow-md">
        <div className=" md:w-[70%] mx-auto px-5 py-16">
          <div className=" flex flex-col md:flex-row gap-10">
            <div className=" md:w-2/3">
                <LeftInfo />
            </div>
            <div className=" md:w-1/3">
              <Slide cascade direction="right" triggerOnce>
                <RightInfo/>
              </Slide>
            </div>
          </div>
        </div>
      </main>

      <ListProjects/>
    </>
  );
}
