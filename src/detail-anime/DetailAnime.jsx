import { Circle } from "rc-progress";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import YouTube from "react-youtube";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { getAnimeDetail } from "../libs/getAnimeDetail";

export async function loader({ params }) {
  const contact = await getAnimeDetail(params.malId);
  console.log(params);
  return { contact };
}

export default function DetailAnime() {
  const [animeData, setAnimeData] = useState([]);
  const { contact } = useLoaderData();
  useEffect(() => {
    setAnimeData(contact.data);
    console.log(contact, "ini contact");
  }, [contact]);
  console.log(animeData);

  const opts = {
    height: "230",
    width: "440",
  };

  return (
    <>
      {animeData.length === 0 ? (
        <p>loading</p>
      ) : (
        <div className="relative">
          <div className="border-b-2 border-slate-100">
            <p className="text-2xl font-bold">Top #{animeData.rank}</p>
            <h2 className="text-5xl font-bold my-4">{animeData.title}</h2>
            <div>
              <span>{animeData.year}</span>
              <div>
                <span>Producers : </span>
                {animeData.producers.map((producer, key) => {
                  return (
                    <span key={key} className="mr-2">
                      {producer.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <button className="btn btn-outline btn-info my-8">
              Add to Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-8 border-b-2 border-slate-100 py-20">
            <img
              src={animeData.images.webp.image_url}
              width={225}
              height={425}
              className="max-w-sm h-fit rounded-lg shadow-2xl"
              alt="ok"
            />
            <div className="w-[70%] text-justify">
              <ReadMoreReact text={animeData.synopsis} ideal={300} max={500} />
              {animeData.genres.map((genre, key) => {
                return (
                  <div key={key} className="badge badge-outline mr-4">
                    {genre.name}
                  </div>
                );
              })}
              <div className="mt-4">{animeData.duration}</div>
            </div>
            <div className="w-full relative">
              <span className="absolute z-20 right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2">
                {animeData.score < 11 ? animeData.score * 10 : animeData.score}{" "}
                %
              </span>
              <Circle
                percent={
                  animeData.score < 11 ? animeData.score * 10 : animeData.score
                }
                strokeWidth={4}
                strokeColor="#D3D3D3"
                className="w-52 absolute right-1/2 translate-x-1/2  bottom-1/2 translate-y-1/2"
              />
            </div>
          </div>

          <YouTube
            videoId={animeData.trailer.youtube_id}
            opts={opts}
            className="absolute top-0 right-0"
            onError={() => alert("Maaf video trailer ini sedang error")}
          />
          {/* <div className="w-[440px] h-[230px] bg-slate-300 absolute top-0 right-0">kopi</div> */}
        </div>
      )}
    </>
  );
}
