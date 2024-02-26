const Pagination = ({ currentPage, totalPages, setPage }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(totalPages, currentPage + 5);

    return (
        <div>
            {pages.slice(startPage - 1, endPage).map((page) => (
                <button key={page} onClick={() => setPage(page)} disabled={page === currentPage}>
                    {page}
                </button>
            ))}
        </div>
    );
};

export {Pagination};
