import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { getAnimeDetail } from "../libs/getAnimeDetail";
import {
  isDesktopDevice,
  isMobileDevice,
  isTabletDevice,
} from "../libs/detectionDevices";
import YouTube from "react-youtube";

export async function loader({ params }) {
  const contact = await getAnimeDetail(params.malId);
  return { contact };
}

export default function DetailAnime() {
  const [animeData, setAnimeData] = useState([]);
  const [showVideo, setShowVideo] = useState(true);
  const { contact } = useLoaderData();

  async function getTitleAnimes (){
    const res = await fetch("https://api.jikan.moe/v4/anime")
    const result = res.json()
    return result
  }


  useEffect(() => {
    setAnimeData(contact.data);
    console.log(contact, "ini contact");
    if (isDesktopDevice()) {
      setShowVideo(true);
    }
    console.log(getTitleAnimes());
  }, [contact]);

  const kopi = animeData.score < 11 ? (animeData.score * 10).toFixed(1) : null;
  return (
    <>
      {animeData.length === 0 ? (
        <p>loading</p>
      ) : (
        <div className="relative">
          <div className="flex justify-between gap-4 border-b-2 border-slate-100 pb-4">
            <div className="w-full lg:w-[60%]">
              <p className="text-2xl font-bold">Top #{animeData.rank}</p>
              <h2 className="text-5xl font-bold my-4">
                {animeData.title}
              </h2>
              <div>
                <span>{animeData.year}</span>
                <div>
                  <span>Producers : </span>
                  {animeData.producers.map((producer, key) => {
                    return (
                      <span key={key} className="mr-2 underline">
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
            <div className="fixed z-10 bottom-4 right-4 lg:static">
            <div className="relative">
              <button
                className={`${
                  showVideo ? "flex" : "hidden"
                } absolute -top-12 lg:-top-14 right-0 lg:hidden btn btn-sm btn-circle btn-outline`}
                onClick={() => setShowVideo((prev) => !prev)}>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div
                className={`${
                  showVideo ? "block" : "hidden"
                } w-[312px] h-[175.50px]  md:w-[450px] md:h-[253.13px]  lg:w-[500px] lg:h-[281.25px] xl:w-[576px] xl:h-[324px]`}>
                  <YouTube videoId={animeData.trailer.youtube_id} onError={()=> alert("Maaf video ini rusak")} className="h-full w-full" opts={{width : "100%", height : "100%"}}/>
              </div>
            </div>
          </div>
          {showVideo ? (
            ""
          ) : (
            <button
              onClick={() => setShowVideo((prev) => !prev)}
              className="fixed bottom-4 right-4 md:fixed btn btn-sm md:btn-md animate-bounce lg:btn-lg">
              Show Video
            </button>
          )}
          </div>
          <div className="h-fit flex flex-wrap gap-8 border-b-2 border-slate-100 pt-14 pb-12">
            <img
              src={animeData.images.webp.image_url}
              width={225}
              height={425}
              className="w-[80%] mx-auto md:w-[35%] md:mx-0 lg:max-w-sm h-fit rounded-lg shadow-2xl"
              alt={animeData.images.jpg.image_url}
            />
            <div className="md:w-[60%] text-justify">
              <ReadMoreReact text={animeData.synopsis} ideal={300} max={500} />
              {animeData.genres.map((genre, key) => {
                return (
                  <div key={key} className="badge badge-outline mt-4 mr-4">
                    {genre.name}
                  </div>
                );
              })}
              <div className="my-4">{animeData.duration}isode</div>
              <div
                className="radial-progress text-primary"
                style={{ "--value": kopi }}
                role="progressbar">
                {animeData.score}%
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// 38524