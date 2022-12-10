import "./header.css";
import React, { Component } from 'react';


export default class Header extends Component {
    state = {
        isOpen: false,
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            headerEl = document.getElementById("banner");
        if (distanceY > shrinkOn) {
            if (headerEl !== null) {
                headerEl.classList.add("bannerShrink");
            }

        } else {
            if (headerEl !== null) {
                headerEl.classList.remove("bannerShrink");
            }
        }
    }
    render() {
        return (
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm">Anime Planet</span>
                    <span className="headerTitleLg">AniAni</span>
                </div>
                <img
                    className="headerImg"
                    id = "banner"
                    src = "https://wallpapersmug.com/download/2048x1152/0f8bba/bunny-ears-anime-white-dress.jpg"
                    alt=""
                />
            </div>
        );
    }
}