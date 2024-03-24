import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import { useEffect, useState } from "react";

export default function Root() {
  const [path, setPath] = useState([])
  const {pathname} = useLocation();
  // console.log(pathname);

  useEffect(()=>{
    if(pathname === "/"){
      setPath([""])
    }else{
      // console.log(path);
      setPath(pathname.split("/"))
    }
  },[pathname])


  return (
    <>
      <Navbar/>
      <div className="px-8 mt-4">
      <BreadCrumbs path={path} />
        <Outlet/></div>
    </>
  );
}
