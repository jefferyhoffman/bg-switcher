import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="Home">
    <h1>Home</h1>
    <p>
      To see a short page, <Link to="/short">click here</Link>. Or, for the long
      page <Link to="/long">click here</Link>.
    </p>
  </div>
);

export default Home;
