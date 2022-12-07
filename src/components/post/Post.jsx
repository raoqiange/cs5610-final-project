import { Link } from "react-router-dom";
import "./post.css";
import React from 'react';

export default function Post({img, id, title, synopsis, status, genres}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
          <div className="postCats">
              { genres &&
                  genres.map(genre => <span className="postCat">
                  {genre}
              </span>)
              }
          </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{status}</span>
      </div>
      <p className="postDesc">
          {synopsis}
      </p>
    </div>
  );
}
