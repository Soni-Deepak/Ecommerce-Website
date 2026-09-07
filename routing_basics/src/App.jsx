import React from "react";

import { Link, Route , Routes } from "react-router-dom";

function HomePage() {
  return <h1>Home Page</h1>;
}

function AboutPage() {
  return <h1>About Page</h1>;
}

const App = () => {
  return <div>

    <nav style={{display: "flex" , gap: "1rem" , marginBottom: "1rem"}} >
      <Link to = "/" > Home </Link>
      <Link to = "/about" > About </Link>
    </nav>

    <Routes>
      <Route path="/" element = {<HomePage />} />
      <Route path="/about" element = {<AboutPage />} />
      <Route path="/*" element = {<h1> 404 Not Found </h1>} />
    </Routes>
  </div>;
};

export default App;

// Normally in React, data flows from parent → child through props. But if you have deeply nested components, passing props down through every level just to reach a component at the bottom is annoying. This is called "prop drilling."
