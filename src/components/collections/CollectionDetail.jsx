import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    getAllAnimeByCollectionIdThunk, removeAnimeFromCollectionThunk, updateCollectionThunk,
} from '../../services/collections/collection-thunks'

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
        <div>
            {!isEditing && collectionName &&
                <>
                    <h1>Collection Name:</h1>
                    <div>
                        {collectionName}
                        <button onClick={()=> setEditing(true)}>Edit</button>
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

            <div>
                <h1>Anime In this Collection: </h1>
                {loadingAnimeInCollection && '...loading anime in this collection'}
                {!loadingAnimeInCollection &&
                    animeInCollection.map(anime =>
                        <li key={anime.anime_id}>
                            <img src={anime.image}/>
                            {anime.title}
                            <p>{anime.synopsis}</p>
                            <button onClick={()=> deleteAnimeFromCollectionHandler(anime.anime_id)}>X</button>
                        </li>
                    )
                }
            </div>
        </div>
    )
}

export default CollectionDetail;