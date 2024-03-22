export default function Skeleton() {
  const skeletonArray = Array.from({ length: 8 }, (_, i) => i);
  return (
    <>
      {skeletonArray.map((key) => {
        return (
          <div key={key} className="flex flex-col gap-4 w-full">
            <div className="skeleton h-[380px] w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        );
      })}
    </>
  );
}
