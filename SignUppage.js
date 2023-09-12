import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './SignUp';
import Login from './Login';

function Homepage() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showhomepage, sethomepage] = useState(false);


  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    sethomepage(false);
  };

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
    sethomepage(false);

  };
  const homepageClick = () => {
    setShowSignup(false);
    setShowLogin(false);
    sethomepage(true);

  };

  return (
    <Router>
      <div>
        <div>
          <button onClick={homepageClick}>Homepage </button>
          <button onClick={handleSignupClick}>Signup</button>
          <button onClick={handleLoginClick}>Login</button>
        </div>
        
        <Routes>
          {showSignup && <Route path="/" element={<Signup />} />}
          {showLogin && <Route path="/" element={<Login />} />}
          {/* {!showSignup && !showLogin && <Route path="/" element={<p>Welcome to our website!</p>} />} */}
        </Routes>
      </div>
    </Router>
  );
}

export default Homepage;
