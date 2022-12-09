import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React from 'react';
import CollectionList from "../../components/collections/CollectionList";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="AniAni" name="name" />
          <label>Email</label>
          <input type="email" placeholder="aniani@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">Update</button>

            <div className="settingsTitleMargin">
              <span className="settingsTitleUpdate">Create Your Own Collection</span>
            </div>
            <div className="collection">
            <CollectionList />
            </div>


        </form>

      </div>




      {/*<Sidebar />*/}

    </div>
  );
}
