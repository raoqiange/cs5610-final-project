import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllAnimeThunk, getAnimeDetailThunk, searchAnimeThunk,
    getRecentlyReviewedAnimeByUsernameThunk} from "../../services/anime/anime-thunks";

const Test = () => {
    const currentUser = 'tom';

    const {allAnimeList,
            loadingAllAnime,
            animeDetail,
            recentlyReviewedAnimeList,
            loadingRecentlyReviewedAnime,
            loadingDetail,
            searchedAnimeList,
            loadingSearchedAnime} = useSelector(state => state.anime);
    const [searchAnime, setSearchAnime] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllAnimeThunk());
    }, [dispatch])

    return (
        <>
            <h1>TEST PAGE</h1>
            <div>
                {loadingAllAnime && "...loading all anime"}
                {!loadingAllAnime && allAnimeList.map(anime => <li key={anime._id}>{anime.title}</li>)}
            </div>
            <div>
                <button onClick={()=> dispatch(getAnimeDetailThunk(1))}>Load Detail for animeId 1</button>
                {loadingDetail && "...loading detail"}
                {!loadingDetail && animeDetail.title}
            </div>
            <div>
                <input type='text' value={searchAnime} onChange={(e)=> setSearchAnime(e.target.value)}/>
                <button onClick={()=>dispatch(searchAnimeThunk(searchAnime))}>Search</button>
                {loadingSearchedAnime && "...loading searched anime"}
                {!loadingSearchedAnime && searchedAnimeList.map(anime => <li key={anime._id}>{anime.title}</li>)}
            </div>

            <div>
                <button onClick={()=> dispatch(getRecentlyReviewedAnimeByUsernameThunk(currentUser))}>
                    Get recently Reviewed Anime List
                </button>
                {loadingRecentlyReviewedAnime && "...loading recently reviewed anime list"}
                {!loadingRecentlyReviewedAnime && recentlyReviewedAnimeList.map(anime=> <li key={anime._id}>{anime.title}</li>)}
            </div>
        </>
    )
};

export default Test;