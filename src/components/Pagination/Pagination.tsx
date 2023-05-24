import { FC } from "react";

type PaginationPropsType = {
    currentPage: number;
    paginationSize: number;
    pageArray: Array<number>;
    onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationPropsType> = ({
    currentPage,
    paginationSize,
    pageArray,
    onPageChange,
}) => {
    const startSlice =
        currentPage <= paginationSize ? 0 : currentPage - paginationSize;
    const finishSlice =
        currentPage <= paginationSize
            ? paginationSize
            : startSlice + paginationSize;
    const slicedArr = pageArray.slice(startSlice, finishSlice);
    console.log(slicedArr);
    const disablePrev = currentPage === pageArray[0];
    const disableNext = currentPage === pageArray[pageArray.length - 1];
    return (
        <div>
            <button
                disabled={disablePrev}
                onClick={() => onPageChange(currentPage - 1)}
            >
                {"<"}
            </button>
            {slicedArr.map((item) => (
                <span key={item} onClick={() => onPageChange(item)}>
                    {item}
                </span>
            ))}
            <button
                disabled={disableNext}
                onClick={() => onPageChange(currentPage + 1)}
            >
                {">"}
            </button>
        </div>
    );
};
