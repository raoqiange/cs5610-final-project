import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk, deleteReviewThunk} from "../../services/reviews/review-thunks";
import "./review.css";
import {Link} from "react-router-dom";

const ReviewList = ({animeDetail}) => {
    const {
        currentUser,
    } = useSelector(state=> state.users);
    const {
        reviews,
        loading
    } = useSelector(state=>state.reviews)

    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const [score, setSore] = useState('');

    console.log(comment, score);

    const createReviewHandler = (e) => {
        e.preventDefault()
        if (!comment || !score) return;
        if (!currentUser) return;
        const anime = {
            username: currentUser.username,
            title: animeDetail.title,
            ranking: animeDetail.ranking,
            image: animeDetail.image,
            thumb: animeDetail.thumb,
            synopsis: animeDetail.synopsis
        }
        const review = {
            username: currentUser.username,
            comment: comment,
            rating: score
        }
        const animeId = animeDetail._id;
        const body = {anime, review}
        dispatch(createReviewThunk({animeId, body}))
    }

    // console.log(reviews)
    return (
        <div className='review-list'>
            {!loading && reviews.map(review=>
                <div className="sideBySide">
                    <div className="review">
                        <text style={{ color: "#1258c9"}}></text> {review.comment} <span></span>
                        <text style={{ color: "#1258c9"}}>Score:</text> {review.rating} <span></span>
                        <text style={{ color: "#1258c9"}}>User:</text>
                        <Link to={'/public/' + review.username}>{review.username}</Link>

                    </div>
                    {((currentUser && review.username === currentUser.username) || (currentUser && currentUser.role === 'ADMIN')) &&
                        <button className="buttonStyleDelete"
                            onClick={()=>dispatch(deleteReviewThunk({reviewId: review._id, username: review.username}))}
                        >
                            Delete
                        </button>}
                </div>
            )}

            {currentUser &&
                <form className="sideBySideSubmit">
                    <textarea required placeholder='Write your comment...' onChange={(e)=>setComment(e.target.value)}>
                        {comment}
                    </textarea>

                    <input className='rating-text' placeholder="Rate 1 to 5" htmlFor='score' type='number' min='1' max='5' onChange={(e)=>setSore(e.target.value)}/>
                    <button className="buttonStyleSubmit" onClick={(e)=>createReviewHandler(e)}>Submit Review</button>
                </form>
            }
        </div>
    )
}

export default ReviewList;