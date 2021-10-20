import React, {useState} from 'react';
import {getFavorites} from '../../common/utils';
import FavoriteItem from './FavoriteItem';
import styles from './Favorite.module.css';

const Favorite = () => {
    const [favoriteList, setFavoriteList] = useState(getFavorites());

    return (
        <>
            <div className={styles.text}>Мои избранные фильмы</div>
            <div className={styles.container}>
                {
                    favoriteList.map(item => (
                        <FavoriteItem
                            key={item.id}
                            favoriteList={favoriteList}
                            setFavoriteList={setFavoriteList}
                            item={item}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Favorite;