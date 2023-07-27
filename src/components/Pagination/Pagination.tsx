import {FC} from 'react';
import s from './Pagination.module.css';

type PaginationPropsType = {
    currentPage: number;
    paginationSize: number;
    pagesCount: number;
    onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationPropsType> = ({
                                                        currentPage,
                                                        paginationSize,
                                                        pagesCount,
                                                        onPageChange,
                                                    }) => {
    let pageArray:number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageArray.push(i);
    }

    const startSlice = currentPage <= paginationSize ? 0 : currentPage - paginationSize;
    const finishSlice = currentPage <= paginationSize ? paginationSize : startSlice + paginationSize;
    const slicedArr = pageArray.slice(startSlice, finishSlice);
    const disablePrev = currentPage === pageArray[0];
    const disableNext = currentPage === pageArray[pageArray.length - 1];
    const setNextPage = () => {
        onPageChange(currentPage + 1)
    }
    const setPrevPage = () => {
        onPageChange(currentPage - 1)
    }

    return (
        <div className={s.body}>
            <button className={s.arrow} disabled={disablePrev} onClick={setPrevPage}>{'<'}</button>
            {slicedArr.map((item) => {
                const spanStyle = item === currentPage ? `${s.pageNumber} + ${s.activePage}` : s.pageNumber;

                return (
                    <span className={spanStyle} key={item} onClick={() => onPageChange(item)}>
                        {item}
                    </span>
                );
            })}
            <button className={s.arrow} disabled={disableNext} onClick={setNextPage}>{'>'}</button>
        </div>
    );
};
