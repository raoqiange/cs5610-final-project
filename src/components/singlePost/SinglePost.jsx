import { Link } from "react-router-dom";
import "./singlePost.css";
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getAnimeDetailThunk} from "../../services/anime/anime-thunks";

export default function SinglePost() {
  const params = useParams();
  const {id} = params;
  const dispatch = useDispatch();

  const {
    animeDetail,
    loadingDetail
} = useSelector(state => state.anime);

  useEffect(() => {
    dispatch(getAnimeDetailThunk(id));
  }, [dispatch])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={animeDetail.image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {animeDetail.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Ranking of All Animes:
            <b className="singlePostAuthor">
                {animeDetail.ranking}
            </b>
          </span>
          <span>
            Episodes:
            <b className="singlePostAuthor">
            {animeDetail.episodes}
              </b>
            </span>
        </div>
        <div className="singlePostInfo">
          <span>
        Genres:
            {
                animeDetail.genres && animeDetail.genres.map((g,idx) => {
                  return <span key={idx}> {g} </span>
                })
            }
          </span>
          <span>
        Type:
            <b className="singlePostAuthor">
            {animeDetail.type}
              </b>
            </span>
        </div>
        <p className="singlePostDesc">
          <br />
          <br />
          {animeDetail.synopsis}
        </p>
      </div>
    </div>
  );
}
