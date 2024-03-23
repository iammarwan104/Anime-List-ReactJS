export default function CardMovie({urlImage, title}) {
  return (
    <>
      <div className="card pt-4 w-full bg-base-100 shadow-xl hover:bg-slate-800 duration-100">
        <figure>
          <img
            src={urlImage}
            alt={title}
            width={300}
            height={400}
            loading="lazy"
            className="w-[90%] rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base">{title}</h2>
        </div>
      </div>
    </>
  );
}
