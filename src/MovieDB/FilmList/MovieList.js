import React, {useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Paginator from '../Pagination/Paginator';
import Film from './Film';
import style from './MovieList.module.css'
import paginate from './Pagination.module.css'

const MovieList = () => {
    const [data, setData] = useState(null);
    const history = useHistory();
    const {page} = useParams();
    const currentPage = page || 1;

    const fetchFilms = useCallback(
        async () => {
            const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=ru-Ru&page=${currentPage}`;
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }, [currentPage]
    );

    useEffect(() => {
            fetchFilms();
        }, [fetchFilms]
    );

    const changePage = useCallback(
        ({selected}) => {
            history.push(`/${selected + 1}`);
        }, [history]
    );

    return (
        <>
            <div className={style.list}>
                {
                    data?.results.map(item => (
                        <Film
                            currentPage={currentPage}
                            key={item.id}
                            item={item}/>
                    ))
                }
            </div>
            <Paginator
                pageCount={data?.total_pages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={5}
                previousLabel={'<'}
                nextLabel={'>'}
                onPageChange={changePage}
                containerClassName={paginate.pagination}
                activeClassName={paginate.active}
            />
        </>
    )
}

export default MovieList;