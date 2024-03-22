import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar/>
      <div className="px-8"><Outlet/></div>
    </>
  );
}
