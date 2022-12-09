import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk, deleteReviewThunk} from "../../services/reviews/review-thunks";

const ReviewList = ({animeDetail}) => {
    const currentUser = 'tom';

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
        const anime = {
            username: currentUser,
            title: animeDetail.title,
            ranking: animeDetail.ranking,
            image: animeDetail.image,
            thumb: animeDetail.thumb,
            synopsis: animeDetail.synopsis
        }
        const review = {
            username: currentUser,
            comment: comment,
            rating: score
        }
        const animeId = animeDetail._id;
        const body = {anime, review}
        dispatch(createReviewThunk({animeId, body}))
    }

    console.log(reviews)
    return (
        <>
            {!loading && reviews.map(review=>
                <div>
                    <div>
                        Comment: {review.comment}
                        Score: {review.rating}
                        user: {review.username}
                    </div>
                    {review.username === currentUser &&
                        <button
                            onClick={()=>dispatch(deleteReviewThunk({reviewId: review._id, username: currentUser}))}
                        >
                            Delete
                        </button>}
                </div>
            )}

            {currentUser &&
                <form>
                    <textarea required placeholder='Write your comment...' onChange={(e)=>setComment(e.target.value)}>
                        {comment}
                    </textarea>
                    <label id='score'>Score: </label>
                    <input htmlFor='score' type='number' min='1' max='10' onChange={(e)=>setSore(e.target.value)}/>
                    <button onClick={(e)=>createReviewHandler(e)}>Submit Review</button>
                </form>
            }
        </>
    )
}

export default ReviewList;