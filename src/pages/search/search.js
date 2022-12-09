import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllAnimeThunk, getAnimeDetailThunk, searchAnimeThunk, getRecentlyReviewedAnimeByUsernameThunk} from "../../services/anime/anime-thunks";
import {Link} from "react-router-dom";
import "./search.css";
import Post from "../../components/post/Post";

const Search = () => {
    const currentUser = 'tom';

    const {
        searchedAnimeList,
        loadingSearchedAnime
    } = useSelector(state => state.anime);
    const [searchAnime, setSearchAnime] = useState('');
    const dispatch = useDispatch();
    
    console.log(searchedAnimeList);
    return (
        <>
            <div className="search">
                <span className="searchTitle">Search</span>
                <form action="details.html"></form>
                <input className="loginInput" type='text' placeholder="Please enter the anime you want to search here"
                       value={searchAnime} onChange={(e)=> setSearchAnime(e.target.value)}/>
                <button className="searchButton" onClick={()=>{
                    if (searchAnime!="") {
                        dispatch(searchAnimeThunk(searchAnime))
                    } else {
                        alert('The Input Content Cannot Be Empty')
                    }
                }}>Search</button>
                {loadingSearchedAnime && "...loading searched anime"}
                {!loadingSearchedAnime && searchedAnimeList.map(anime =>
                    <div className="anime" key={anime._id}> <Post img={anime.image} id={anime._id}
                                                title={anime.title} synopsis={anime.synopsis} 
                                                status={anime.status} genres={anime.genres}/> </div>)}
            </div>
        </>
    )
};

export default Search;
