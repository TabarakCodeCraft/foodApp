import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css"
import SplashScreen from "./screens/splashScreen/splashScreen";
import WellcomeScreen from "./screens/welcomeScreen/welcomeScreen";
import OnBoardingScreen from "./screens/onBoardingScreen/OnBoardingScreen";
import LoginScreen from "./screens/loginScreen/loginScreen";
import SingUpScreen from "./screens/singUpScreen/singUpScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Router>
        <Routes>
          {
            showSplash ? (
              <Route path="/" element={<SplashScreen />} />
            ) : (
              <>
                <Route path="/" element={<Navigate replace to="/welcome" />} />
                <Route path="/welcome" element={<WellcomeScreen />} />
                <Route path="/onboarding" element={<OnBoardingScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signup" element={<SingUpScreen />} />
              </>
            )
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
