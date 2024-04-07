import Skeleton from "../../components/Skeleton";
import CardMovie from "../../components/card-movie/Card";
import { Link, useLoaderData } from "react-router-dom";
import { getTopAnime } from "../../libs/getTopAnime";
import { useEffect, useState } from "react";

export async function loader() {
  const contact = await getTopAnime("limit=8");
  return { contact };
}

export default function HomePage() {
  const [animesData, setAnimesData] = useState([])
  const {contact} = useLoaderData();
  useEffect(()=>{
      setAnimesData(contact.data)
  },[contact])
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl">Top Anime</h1>
        <Link to={"Top-Anime"} className="hover:text-blue-400">Lihat Semua</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
        animesData.length === 0 ? (
          <Skeleton />
        ) : (
          animesData.map((data) => {
            return (
              <CardMovie
                key={data.mal_id}
                title={data.title}
                malId={data.mal_id}
                urlImage={data.images.webp.image_url}
              />
            );
          })
        )
        }
      </div>
    </section>
  );
}
