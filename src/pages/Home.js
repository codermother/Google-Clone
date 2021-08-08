import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-headerRight">
          <a href="https://gmaiil-clone-v1.web.app/">Gmail</a>

          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home-body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home-inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
