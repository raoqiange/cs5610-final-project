// import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {getCollectionsByUsernameThunk, getCollectionByCollectionIdThunk, createCollectionThunk,
//     } from '../../services/collections/collection-thunks'
// // updateCollectionThunk, deleteCollectionThunk
//
// import CollectionDetail from './collectionDetail';
//
// const CollectionTest = () => {
//     const currentUser = 'tom';
//     const {
//      collections,
//      loadingCollections,
//      currentCollection,
//      loadingCollection,
//      // animeInCollection,
//      // loadingAnimeInCollection
//     } = useSelector(state => state.collections);
//     const dispatch = useDispatch();
//     const [newCollectionName, setNewCollectionName] = useState('');
//     // console.log(collections);
//     // console.log(currentCollection);
//     return (
//         <>
//             <div>
//                 <button onClick={() => dispatch(getCollectionsByUsernameThunk(currentUser))}>
//                     Get all collections for user tome
//                 </button>
//                 {loadingCollections && "...loading collections"}
//                 {!loadingCollections &&
//                     collections.map(collection =>
//                             <li
//                                 onClick={()=>dispatch(getCollectionByCollectionIdThunk(collection._id))}
//                                 key={collection._id}>
//                                 {collection.name}
//                             </li>
//                      )
//                 }
//                 {loadingCollection && "...loading collection"}
//                 {!loadingCollection && <CollectionDetail currentCollection={currentCollection}/>}
//
//                 <input type='text' value={newCollectionName} onChange={(e) => setNewCollectionName(e.target.value)}/>
//                 <button onClick={()=>dispatch(createCollectionThunk({fan_username: currentUser, name: newCollectionName}))}>
//                     Add a new Collection
//                 </button>
//             </div>
//         </>
//     )
// }
//
// export default CollectionTest;
