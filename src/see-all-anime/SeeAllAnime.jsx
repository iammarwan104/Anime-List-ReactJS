import { useEffect, useState } from "react";
import CardMovie from "../components/card-movie/Card";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/LibraryPagination";
// import { data } from "autoprefixer";

export default function SeeAllAnime() {
  const [datas, setDatas] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function getData(page) {
    setDatas([]);
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    const dataAnime = await res.json();
    setDatas(dataAnime.data);
    setTotalPages(dataAnime.pagination.last_visible_page);
  }
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <section className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-xl">Top Anime</h1>
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
}
