import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllAnimeThunk, getAnimeDetailThunk, searchAnimeThunk, getRecentlyReviewedAnimeByUsernameThunk} from "../../services/anime/anime-thunks";
import {Link} from "react-router-dom";
import "./search.css";

const Search = () => {
    const currentUser = 'tom';

    const {
        searchedAnimeList,
        loadingSearchedAnime} = useSelector(state => state.anime);
    const [searchAnime, setSearchAnime] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllAnimeThunk());
    }, [dispatch])

    return (
        <>
            <div className="search">
                <span className="searchTitle">Search</span>
                <form action="details.html"></form>
                <input className="loginInput" type='text' placeholder="Please enter the anime you want to search here" value={searchAnime} onChange={(e)=> setSearchAnime(e.target.value)}/>
                <button className="searchButton" onClick={()=>dispatch(searchAnimeThunk(searchAnime))}>Search</button>
                {loadingSearchedAnime && "...loading searched anime"}
                {!loadingSearchedAnime && searchedAnimeList.map(anime => <li key={anime._id}>{anime.title}</li>)}
            </div>
        </>
    )
};

export default Search;