import React, {useEffect, useState} from "react";
import './collection.css';
import {useDispatch, useSelector} from "react-redux";
import {
    getCollectionsByUsernameThunk, createCollectionThunk, deleteCollectionThunk,
} from '../../services/collections/collection-thunks'
import CollectionCard from "./CollectionCard";

const CollectionTest = () => {
    const currentUser = 'tom';
    const {
        collections,
        loadingCollections,
    } = useSelector(state => state.collections);
    const dispatch = useDispatch();
    const [newCollectionName, setNewCollectionName] = useState('');

    useEffect(()=> {
        dispatch(getCollectionsByUsernameThunk(currentUser))
    }, [dispatch])

    return (
        <>
        <div className="collection-list">
            <div className="card">
                <img className="w-100 img-new" src="https://icon-library.com/images/download-icon-anime/download-icon-anime-14.jpg" alt="folder"/>
                <input className="new-collection-input" style={{width: "90%", height: '10%'}} placeholder="Type a Collection Name" type='text' value={newCollectionName} onChange={(e) => setNewCollectionName(e.target.value)}/>
                <button className="buttonStyle"
                        onClick={(e)=>{
                            e.preventDefault();
                            dispatch(createCollectionThunk({fan_username: currentUser, name: newCollectionName}))
                        }}>
                    Add a new Collection
                </button>
            </div>

            {loadingCollections && "...loading collections"}
            {!loadingCollections &&
                collections.map(collection => <CollectionCard collection={collection}/>)
            }
        </div>
        </>
    )
}

export default CollectionTest;
