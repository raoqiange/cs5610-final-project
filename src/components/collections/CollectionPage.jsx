import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CollectionDetail from "./CollectionDetail";
import {getCollectionByCollectionIdThunk} from "../../services/collections/collection-thunks";
import {useParams} from "react-router-dom";

const CollectionPage= () => {
    const {collectionId} = useParams();
    const dispatch = useDispatch();

    const {
        currentCollection,
        loadingCollection
    } = useSelector(state => state.collections);

    const {
        currentUser,
    } = useSelector(state=> state.users);

    useEffect(()=> {
        if(collectionId) {
            dispatch(getCollectionByCollectionIdThunk(collectionId));
        }
    }, [collectionId]);

    return (
        <>
            {!loadingCollection && currentUser &&
                <CollectionDetail currentCollection={currentCollection} currentUser={currentUser}/>}
        </>
    )
}

export default CollectionPage;