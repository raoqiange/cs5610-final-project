import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Anime Planet</span>
        <span className="headerTitleLg">AniAni</span>
      </div>
      <img
        className="headerImg"
        // src="http://img0.joyreactor.com/pics/comment/full/banner-art-anime-speed-grapher-886729.png"
          src = "https://wallpapersmug.com/download/2048x1152/0f8bba/bunny-ears-anime-white-dress.jpg"
        alt=""
      />
    </div>
  );
}
