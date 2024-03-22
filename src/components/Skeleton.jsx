export default function Skeleton() {
  const skeletonArray = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="grid grid-cols-4 gap-4">
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
    </div>
  );
}
