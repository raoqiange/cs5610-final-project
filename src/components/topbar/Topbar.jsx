import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          {user ? (
              <Link className="link" to="/profile">
                <li className="topListItem">PROFILE</li>
              </Link>
          ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
          )}
          {user && <li className="topListItem">LOGOUT</li>}
          <i className="topSearchIcon fas fa-search"></i>

        </ul>
      </div>
    </div>
  );
}
