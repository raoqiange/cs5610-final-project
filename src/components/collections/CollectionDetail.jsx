import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    getAllAnimeByCollectionIdThunk, removeAnimeFromCollectionThunk, updateCollectionThunk,
} from '../../services/collections/collection-thunks'
import {Link} from "react-router-dom";

const CollectionDetail = ({currentCollection}) => {
    const [collectionName, setCollectionName] = useState(currentCollection.name);
    const [isEditing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const currentUser = 'tom';
    const {
        animeInCollection,
        loadingAnimeInCollection
    } = useSelector(state => state.collections);

    useEffect(()=> {
        const collectionId = currentCollection._id;
        const username = currentUser;
        dispatch(getAllAnimeByCollectionIdThunk({collectionId, username}))
    }, [dispatch, currentCollection._id])

    const updateCollectionNameHandler = () => {
        setEditing(false);
        const collectionId = currentCollection._id;
        const body = {name: collectionName};
        dispatch(updateCollectionThunk({collectionId, body}));
    }

    const deleteAnimeFromCollectionHandler = (animeId) => {
        const collectionId = currentCollection._id;
        const username = currentUser;
        dispatch(removeAnimeFromCollectionThunk({collectionId, animeId, username}))
    }

    return (
        <div className="marginAll">
            <div className="marginInside">
            <div className="title">
            <h1>Collection Name:</h1>
                </div>
            {!isEditing &&
                <>
                    <div>
                        {collectionName}
                        <button className="buttonStyleEdit" onClick={()=> setEditing(true)}>Edit</button>
                    </div>
                </>
            }
            {isEditing&&
                <div>
                    <input type='text'
                           value={collectionName}
                           onChange={(e)=>setCollectionName(e.target.value)}/>
                    <button onClick={updateCollectionNameHandler}>Update</button>
                </div>
            }

            <div className="horizontal_line"></div>


            <div className="animeInCollection">
                <div className="title">
                <h1>Animes In this Collection: </h1>
                </div>
                {loadingAnimeInCollection && '...loading anime in this collection'}
                {!loadingAnimeInCollection &&
                    animeInCollection.map(anime =>
                        <div key={anime.anime_id}>
                            <Link to={`/post/${anime.anime_id}`}>
                                <img src={anime.image}/> <br/>
                                {anime.title}
                            </Link>
                            <button className="buttonStyleRemoveFromCollection" onClick={()=> deleteAnimeFromCollectionHandler(anime.anime_id)}>
                                Remove this Anime</button>
                        </div>
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default CollectionDetail;