import React, { useMemo } from "react";
import "./Pagination.scss";
import { LeftArrow, RightArrow } from "../../../assets/icons/icons";
import { clsx } from "../../../utils/utils";

const buildPages = (totalPages, currentPage) => {
    const pages = [];

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        return pages;
    }

    // far left
    if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
        return pages;
    }

    // far right
    if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        return pages;
    }

    // middle
    pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    return pages;
};

const Pagination = ({ totalPages = 1, currentPage = 1, onPageChange, className }) => {
    // normalize types so comparisons work reliably
    const total = Number(totalPages) || 1;
    const current = Number(currentPage) || 1;

    const pages = useMemo(() => buildPages(total, current), [total, current]);

    const handleClick = (page) => {
        if (page === "..." || page === current) return;
        // ensure numeric payload
        onPageChange(Number(page));
    };

    return (
        <div className={clsx("custom_pagination", className)}>
            <button
                className="arrow"
                disabled={current === 1}
                onClick={() => handleClick(current - 1)}
                aria-label="previous page"
            >
                <LeftArrow />
            </button>

            {pages.map((page, index) =>
                page === "..." ? (
                    <span key={`dots-${index}`} className="dots">
                        ...
                    </span>
                ) : (
                    <button
                        key={`page-${page}`}
                        className={`page ${current === page ? "active" : ""}`}
                        onClick={() => handleClick(page)}
                        aria-current={current === page ? "page" : undefined}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                className="arrow"
                disabled={current === total}
                onClick={() => handleClick(current + 1)}
                aria-label="next page"
            >
                <RightArrow />
            </button>
        </div>
    );
};

export default Pagination;
