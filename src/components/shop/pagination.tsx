// components/Pagination.tsx
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const maxVisiblePages = 3;
    
    const getVisiblePages = () => {
      const half = Math.floor(maxVisiblePages / 2);
      const startPage = Math.max(1, currentPage - half);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
  
    return (
      <div className="flex justify-center items-center space-x-4 my-10">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 text-[#ff9f0d] rounded disabled:opacity-50"
        >
          «
        </button>
        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 ${currentPage === page ? "bg-orange-500 text-white" : "bg-gray-100 text-[#ff9f0d]"}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 text-[#ff9f0d] rounded disabled:opacity-50"
        >
          »
        </button>
      </div>
    );
  };
  
  export default Pagination;
  