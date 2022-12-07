import "./forum.css";
import React from 'react';

export default function Forum() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/thumbnail/1600x900/quality/100/Genshin-Impact-anime.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
