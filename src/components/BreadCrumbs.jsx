import { Link } from "react-router-dom";

export default function BreadCrumbs({path}) {
  return (
    <>
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          {
            path.map((p, key) => {

              if(p === ""){
                return <li key={key}><Link to={"/"}>Home</Link></li>
              }else{
                return <li key={key}><Link to={p}>{p.replace("-", " ")}</Link></li>
              }
              
            })
          }
        </ul>
      </div>
    </>
  );
}
