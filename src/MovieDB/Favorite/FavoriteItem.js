import React, {useCallback} from 'react';
import {setFavorites} from '../../common/utils';
import style from './FavoriteItem.module.css'

const FavoriteItem = ({favoriteList, setFavoriteList, item}) => {

    const handleDeleteItem = useCallback(
        (id) => {
            const newList = [...favoriteList].filter(item => item.id !== id);
            setFavoriteList(newList);
            setFavorites(newList);
        }, [favoriteList, setFavoriteList]
    );

    return (
        <div className={style.style}>
            <img
                className={style.poster}
                src={`http://image.tmdb.org/t/p/w342${item?.poster_path}`}
                alt='Ошибка при загрузки изображения!'
            />
            <div className={style.info}>
                <div className={style.head}>
                    <div className={style.title}>{item?.title}</div>
                    <div className={style.delete} onClick={() => handleDeleteItem(item.id)}>Удалить</div>
                </div>
                <div className={style.overview}>{item?.overview}</div>
            </div>
        </div>
    )
}

export default FavoriteItem;