import { Link } from 'react-router-dom';
import './sidebar.css';
import React from 'react';

export default function Sidebar(props) {
    const navHandler = (type) => {
        props.filterPost && props.filterPost(type);
    };
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>About AniAni</span>
                <img src='https://img.freepik.com/premium-photo/woman-portrait-park-anime-manga-style_691560-1170.jpg' alt='' />
                <p className='sidebarPara'>
                    AniAni is the ultimate destination for anime fans! With a vast collection of popular and classic anime
                    titles, you'll find hours of entertainment on our website. Our user-friendly interface makes it easy
                    to search for your favorite shows and discover new ones. Join the AniAni community today and get ready to be
                    transported to the world of anime!
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CLICK TO FILTER!</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem' onClick={() => navHandler('Action')}>
                        Action
                    </li>
                    <li className='sidebarListItem' onClick={() => navHandler('Comedy')}>
                        Comedy
                    </li>
                    <li className='sidebarListItem' onClick={() => navHandler('Drama')}>
                        Drama
                    </li>
                    <li className='sidebarListItem' onClick={() => navHandler('Sci-Fi')}>
                        Sci-Fi
                    </li>
                    <li className='sidebarListItem' onClick={() => navHandler('Fantasy')}>
                        Fantasy
                    </li>
                    <li className='sidebarListItem' onClick={() => navHandler('Adventure')}>
                        Adventure
                    </li>
                    {/*<li className='sidebarListItem' onClick={() => navHandler('Supernatural')}>*/}
                    {/*    Supernatural*/}
                    {/*</li>*/}
                    {/*<li className='sidebarListItem' onClick={() => navHandler('Mystery')}>*/}
                    {/*    Mystery*/}
                    {/*</li>*/}
                </ul>
            </div>
        </div>
    );
}
