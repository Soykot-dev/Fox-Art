import { useState } from "react";
import Shirt from "./Shirt";

const Shirts = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8;

    const totalPages = Math.ceil(data.length / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = data.slice(
        startIndex,
        startIndex + productsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({
            top: 450,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="mt-12 mb-6 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] opacity-50">
                    Explore Our Collection
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Featured T-Shirts
                </h2>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-base-content"></div>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-6 opacity-60">
                    Discover our latest collection of premium designs made for
                    your everyday style.
                </p>
            </div>

            {/* Cards */}
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* cards */}
            </div>
            {/* Products */}
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentProducts.map((shirt) => (
                    <Shirt key={shirt.id} shirt={shirt} />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
                <div className="join">
                    {/* Previous */}
                    <button
                        className="join-item btn"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        «
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => {
                        const page = index + 1;

                        return (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`join-item btn ${currentPage === page
                                        ? "btn-neutral"
                                        : ""
                                    }`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    {/* Next */}
                    <button
                        className="join-item btn"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        »
                    </button>
                </div>
            </div>
        </>
    );
};

export default Shirts;