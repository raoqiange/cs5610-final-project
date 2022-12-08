import { useLocation } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getAllAnimeThunk, getAnimeDetailThunk, searchAnimeThunk, getRecentlyReviewedAnimeByUsernameThunk} 
    from "../../services/anime/anime-thunks";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import React, {useEffect} from 'react';
import "./homepage.css";
import Post from "../../components/post/Post";

export default function Homepage() {

    const dispatch = useDispatch();
    const {
        allAnimeList,
        loadingAllAnime
    } = useSelector(state => state.anime);

    useEffect(() => {
        dispatch(getAllAnimeThunk());
    }, [dispatch])

    console.log(allAnimeList);

    // anonymous user & admin => allAnime
    // fan & forum owner => recently reviewed anime
    return (
      <>
        <Header />
        <div className="home">
            <div className="anime">
            {!loadingAllAnime && allAnimeList.map(anime =>
                <div key={anime._id}> <Post img={anime.image} id={anime._id}
                                                              title={anime.title} synopsis={anime.synopsis}
                                                              status={anime.status} genres={anime.genres}/> </div>)}
            </div>
          <Sidebar />
        </div>
      </>
    );
  }
