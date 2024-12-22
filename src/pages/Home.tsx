import { CardLastWork } from "../components/Home";
import { Banner } from "../components/Home/Banner";

export default function Home() {
  return (

      <>
      <main className="">
        <Banner />
      </main>

      <div className=" bg-neutral-50 pt-16">
        <CardLastWork />
      </div>
      </>
  );
}
