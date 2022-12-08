import {getCollectionByCollectionIdThunk} from "../../services/collections/collection-thunks";
import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const CollectionCard = ({collection}) => {
    const dispatch = useDispatch();

    return (
        <div className="card" key={collection._id}>
            <Link to={`/collection/${collection._id}`}>
                <img className="w-100" src="https://icon-library.com/images/download-icon-anime/download-icon-anime-14.jpg" alt="folder"/>
                <div className="container">
                    <h4><b>{collection.name}</b></h4>
                </div>
            </Link>
        </div>
    )
}

export default CollectionCard;