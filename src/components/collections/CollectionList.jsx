import React, {useEffect, useState} from "react";
import './collection.css';
import {useDispatch, useSelector} from "react-redux";
import {getCollectionsByUsernameThunk, createCollectionThunk,
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
            <div className="flex-break"></div>
        <div className="collectionList">
            <div>
                <input placeholder="Type a Colletion Name" type='text' value={newCollectionName} onChange={(e) => setNewCollectionName(e.target.value)}/>
                <button className="buttonStyle" onClick={()=>dispatch(createCollectionThunk({fan_username: currentUser, name: newCollectionName}))}>
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
