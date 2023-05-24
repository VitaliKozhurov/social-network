import { FC } from "react";
import s from "./Pagination.module.css";

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
        <div className={s.body}>
            <button
                disabled={disablePrev}
                onClick={() => onPageChange(currentPage - 1)}
            >
                {"<"}
            </button>
            {slicedArr.map((item) => {
                const spanStyle =
                    item === currentPage
                        ? `${s.pageNumber} + ${s.activePage}`
                        : s.pageNumber;
                return (
                    <span
                        className={spanStyle}
                        key={item}
                        onClick={() => onPageChange(item)}
                    >
                        {item}
                    </span>
                );
            })}
            <button
                disabled={disableNext}
                onClick={() => onPageChange(currentPage + 1)}
            >
                {">"}
            </button>
        </div>
    );
};
