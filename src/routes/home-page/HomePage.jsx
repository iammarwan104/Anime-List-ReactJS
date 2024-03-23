import { useEffect } from "react";
import Skeleton from "../../components/Skeleton";
import CardMovie from "../../components/card-movie/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [datas, setDatas] = useState([]);
  async function getData() {
    const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=8");
    const dataAnime = await res.json();
    setDatas(dataAnime.data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl">Top Anime</h1>
        <Link to={"top-anime"} className="hover:text-blue-400">Lihat Semua</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {datas.length === 0 ? (
          <Skeleton />
        ) : (
          datas.map((data) => {
            return (
              <CardMovie
                key={data.mal_id}
                title={data.title}
                urlImage={data.images.webp.image_url}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
