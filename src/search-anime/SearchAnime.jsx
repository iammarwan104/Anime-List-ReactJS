import { useEffect, useState } from "react";
import CardMovie from "../components/card-movie/Card";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/LibraryPagination";
import { useParams } from "react-router-dom";

export default function SearchAnime() {
  const [datas, setDatas] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {name} = useParams()

  async function getDataWithNamePage(page) {
    setDatas([])
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${name}&page=${page}`);
    const dataAnime = await res.json();
    console.log(dataAnime.data);
    setDatas(dataAnime.data);
    setTotalPages(dataAnime.pagination.last_visible_page)
  }

  async function getDataWithoutNamedanPage(page) {
    setDatas([])
    const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
    const dataAnime = await res.json();
    setDatas(dataAnime.data);
    console.log(dataAnime.data);
    setTotalPages(dataAnime.pagination.last_visible_page)
  }

  useEffect(() => {
    !name ? getDataWithoutNamedanPage(currentPage) : getDataWithNamePage(currentPage);
    console.log("terender");
  }, [currentPage, name]);


  return (
    <section className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-xl">{name}</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
        datas.length === 0 ? (
          <Skeleton />
        ) : (
          datas.map((data) => {
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
}
