import "./singlePost.css";
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getAnimeDetailThunk} from "../../services/anime/anime-thunks";
import {addAnimeToCollectionThunk, getCollectionsByUsernameThunk} from "../../services/collections/collection-thunks";

export default function SinglePost() {
  const currentUser = "tom"; //now hardcoded need to identify user later
  const params = useParams();
  const {id} = params;
  const dispatch = useDispatch();

  const {
    animeDetail,
    loadingDetail
} = useSelector(state => state.anime);

  const {
    collections,
    loadingCollections,
    message
  } = useSelector(state => state.collections);

  useEffect(() => {
    dispatch(getAnimeDetailThunk(id));
    dispatch(getCollectionsByUsernameThunk(currentUser))
  }, [dispatch])

  const addAnimeToCollectionHandler = (collectionId, animeDetail) => {
    console.log("hello")
    const animeId = animeDetail._id.trim();
    const username = currentUser;
    const body = {
      anime: {
        username: username,
        title: animeDetail.title,
        ranking: animeDetail.ranking,
        image: animeDetail.image,
        thumb:animeDetail.thumb,
        synopsis: animeDetail.synopsis
      }
    }
    // console.log(body)
    dispatch(addAnimeToCollectionThunk({collectionId, animeId, username, body}));
  }
  console.log(message);

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
            {currentUser &&
              <>
                <i className="singlePostIcon far fa-plus-square"></i>

                <select name="collections" id="collections" onChange={(e)=> addAnimeToCollectionHandler(e.target.value, animeDetail)}>
                  <option value="Collections" selected disabled hidden>Add To My Collections</option>
                  {!loadingCollections && collections.map(collection =>
                      <option
                          value={collection._id}
                          onClick={()=> addAnimeToCollectionHandler(collection._id, animeDetail)}
                      >
                        {collection.name}
                      </option>
                  )}

                </select>
                {message}
              </>
            }

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
