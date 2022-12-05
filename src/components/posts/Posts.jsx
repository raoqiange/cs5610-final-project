import Post from "../post/Post";
import "./posts.css";
import React from 'react';

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://thecinemaholic.com/wp-content/uploads/2021/01/nezuu-e1638963260523.jpg" />
      <Post img="https://img.welt.de/img/kultur/kino/mobile239282749/6171629957-ci23x11-w1136/BELLE-Pressebilder-Weltstar-in-geheimer.jpg" />
      <Post img="https://www.lifewire.com/thmb/PpnJuquSid8GJ4rrxNsXe_nXqa4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anime-pokemon-5a191e1789eacc00372449e8-512c78337fbe42b2b6cd6280bb7a23f6.jpg"/>
      <Post img="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/280291322_111757248196963_4221131009645511214_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XjBLR5KXfsoAX8MQiyx&_nc_ht=scontent-ord5-1.xx&oh=00_AfBnLGJo9_u-U_PqfNACBLdfb8s-4GgP3CoERtFSociJBA&oe=638CD381"/>
      <Post img="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2018/03/18030706525694.jpg?w=720&ssl=1"/>
      <Post img="https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png"/>
    </div>
  );
}
