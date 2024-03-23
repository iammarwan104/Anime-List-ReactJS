export default function Pagination({ page, setPage, handleNext, handlePrev }) {
  // Array kosong
  const arrayKosong = Array.from({ length: 5 }, (_, i) => page <= 2 ? i + page : i + (page - 2));
  return (
    <>
      <div className="join mx-auto w-fit flex">
        {page === 1 ? null : (
          <button onClick={handlePrev} className="join-item btn">
            «
          </button>
        )}

        <div className="w-fit mx-auto">
          {arrayKosong.map((key) => {
            return (
              <button key={key} onClick={() => setPage(key)} className={`join-item btn ${page === key ? 'btn-active' : ''}`}>
                {key}
              </button>
            );
          })}
        </div>
        {page === 1071 ? null : (
          <button onClick={handleNext} className="join-item btn">
            »
          </button>
        )}
      </div>
    </>
  );
}
