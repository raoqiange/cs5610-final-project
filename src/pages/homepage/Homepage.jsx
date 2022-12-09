import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllAnimeThunk,
    getAnimeDetailThunk,
    searchAnimeThunk,
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
    const { allAnimeList, loadingAllAnime } = useSelector((state) => state.anime);
    const [postData, setPostData] = useState(allAnimeList);
    const {currentUser} = useSelector(state => state.users)
    console.log(currentUser)

    useEffect(() => {
        dispatch(getAllAnimeThunk());
    }, [dispatch]);

    console.log(allAnimeList);
    useEffect(() => {
        setPostData(allAnimeList);
    }, [allAnimeList]);

    const filterPost = (type) => {
        const newData = allAnimeList.filter((item) => item.genres.includes(type));
        setPostData(newData);
    };

    // anonymous user & admin => allAnime
    // fan & forum owner => recently reviewed anime
    return (
        <>
            <Header />
            <div className='home'>
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
