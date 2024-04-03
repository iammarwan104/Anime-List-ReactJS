export default  function Pagination({ page, setPage, pages, setPages, handleNext, handlePrev }) {
  // Array kosong
  // const arrayKosong =  pages <= 5 ? Array.from({ length: pages }, (_, i) => i+1) : Array.from({ length: 5 }, (_, i) => page <= 2 ? i + page : i + (page - 2)); 
  const arrayKosong =  pages <= 5 ? Array.from({ length: pages }, (_, i) => i+1) : Array.from({ length: 5 }, (_, i) => page <= 2 && page <= 4 ? i + 1 : page <= 6 && page <= 9 ? i+4 : i+5); 
  console.log(page);
  console.log(pages);
  console.log(arrayKosong);
  return (
    <>
      <div className="join mx-auto w-fit flex">
        {page === 1 ? null : (
          <button onClick={handlePrev} className="join-item btn">
            «
          </button>
        )}

        <div className="w-fit mx-auto">
          {arrayKosong.map((a, key) => {
            return (
              <button key={key} onClick={() => setPage(a)} className={`join-item btn ${page === a ? 'btn-active' : ''}`}>
                {a}
              </button>
            );
          })}
        </div>
        {page === pages ? null : (
          <button onClick={handleNext} className="join-item btn">
            »
          </button>
        )}
      </div>
    </>
  );
}
