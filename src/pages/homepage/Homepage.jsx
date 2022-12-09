import { useDispatch, useSelector } from 'react-redux';
import {
    getAllAnimeThunk,
    getRecentlyReviewedAnimeByUsernameThunk,
} from '../../services/anime/anime-thunks';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import './homepage.css';
import Post from '../../components/post/Post';

export default function Homepage() {
    const dispatch = useDispatch();
    const { allAnimeList, loadingAllAnime, recentlyReviewedAnimeList, loadingRecentlyReviewedAnime}
        = useSelector((state) => state.anime);
    const [postData, setPostData] = useState(allAnimeList);
    const {currentUser} = useSelector(state => state.users)
    console.log(currentUser)

    useEffect(() => {
        dispatch(getAllAnimeThunk());
    }, [dispatch]);

    // console.log(allAnimeList);
    useEffect(() => {
        setPostData(allAnimeList);
    }, [allAnimeList]);

    useEffect(()=> {
        currentUser && dispatch(getRecentlyReviewedAnimeByUsernameThunk(currentUser.username))
    }, [currentUser])

    console.log(recentlyReviewedAnimeList)

    const filterPost = (type) => {
        const newData = allAnimeList.filter((item) => item.genres.includes(type));
        setPostData(newData);
    };

    // anonymous user & admin => allAnime
    // fan & forum owner => recently reviewed anime
    return (
        <>
            <Header />
            {currentUser && currentUser.role !== "ADMIN" &&
            <>
                <h2 className='text-title'>You've recently reviewed these anime...</h2>
                <div className='anime'>
                    {!loadingRecentlyReviewedAnime && recentlyReviewedAnimeList.length !== 0 &&
                    recentlyReviewedAnimeList.map((anime) => (
                        <div key={anime.anime_id}>
                            {' '}
                            <Post
                                img={anime.image}
                                id={anime.anime_id}
                                title={anime.title}
                                synopsis={anime.synopsis}
                            />{' '}
                        </div>
                    ))}
                    {!loadingRecentlyReviewedAnime && recentlyReviewedAnimeList.length === 0 &&
                    <>
                        <h2 className='no-history-text'>Looks like you don't have review history...</h2>
                        <img className="charging-img" src="https://media.tenor.com/zoWAtwWVq4AAAAAC/miku-anime.gif"/>
                    </>

                    }
                </div>
                <h2 className='text-title'>Start Exploring All Anime....</h2>
            </>
            }
            <div className='home'>
                {/*display for all users*/}
                <div className='anime'>
                    {!loadingAllAnime &&
                    postData.map((anime) => (
                        <div key={anime._id}>
                            {' '}
                            <Post
                                img={anime.image}
                                id={anime._id}
                                title={anime.title}
                                synopsis={anime.synopsis}
                                status={anime.status}
                                genres={anime.genres}
                            />{' '}
                        </div>
                    ))}
                </div>
                <Sidebar filterPost={(type) => filterPost(type)} />
            </div>
        </>
    );
}