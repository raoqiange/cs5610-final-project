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

    useEffect(()=> {
        if(collectionId) {
            dispatch(getCollectionByCollectionIdThunk(collectionId));
        }
    }, [collectionId]);

    return (
        <>
            {!loadingCollection && <CollectionDetail currentCollection={currentCollection}/>}
        </>
    )
}

export default CollectionPage;