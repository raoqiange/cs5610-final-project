import React from "react";
import {Link} from "react-router-dom";
import {deleteCollectionThunk} from "../../services/collections/collection-thunks";
import {useDispatch} from "react-redux";
import './collection.css';

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
            <button className="buttonStyleDelete" onClick={()=>dispatch(deleteCollectionThunk(collection._id))}>Delete</button>
        </div>
    )
}

export default CollectionCard;