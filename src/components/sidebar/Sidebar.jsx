import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About AniAni</span>
        <img
          src="https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">Action</Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">Comedy</Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">Drama</Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">Tragedy</Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">History</Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">Magic</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
