import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="headerContainer">
        <h1>
          <span>Cooking</span> with fun made easy and accessible
        </h1>
        <p>
          It's easy to to use and offers a variety of recipes that appeal to
          beginners and experts alike. Ready to get cooking?
        </p>
        <div className="exploreBtn">
          <button><Link to='/recipe'>Get Started</Link></button>
          <h3><Link to='/about'>Learn More</Link></h3>
        </div>
        <div className="taglineContainer">
          <div className="tagline" >
            <img src="/icons8-heart-16.png" alt="" />
            <h4>Inspired by thousand of delicious recipes</h4>
          </div>
          <div className="tagline">
            <img src="/icons8-star-64.png" alt="" />
            <h4>The winner of Apple design Award</h4>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
