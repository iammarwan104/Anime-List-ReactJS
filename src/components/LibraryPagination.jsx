import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
// 👆 classic theme, see below for other theme / css options

export default function Pagination({totalPages, currentPage, setCurrentPage}) {

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
      maxWidth={50}
    />
  );
}