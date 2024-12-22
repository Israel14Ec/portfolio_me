import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/Layout";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
