import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardMovie from "../components/card-movie/Card";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination";

export default function SeeAllAnime() {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);

  function handleNext() {
    setPage((pre) => pre + 1);
  }

  function handlePrev() {
    setPage((pre) => pre - 1);
  }

  async function getData(page) {
    setDatas([])
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    const dataAnime = await res.json();
    setDatas(dataAnime.data);
  }
  useEffect(() => {
    getData(page);
  }, [page]);


  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl">Top Anime</h1>
        <Link to={"top-anime"} className="hover:text-blue-400">
          Lihat Semua
        </Link>
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
      <Pagination page={page} setPage={setPage} handleNext={handleNext} handlePrev={handlePrev}/>
    </section>
  );
}
