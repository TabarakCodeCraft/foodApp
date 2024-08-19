import React, { useState, useEffect } from "react";
import "./App.css"
import SplashScreen from "./screens/splashScreen/splashScreen";
import WellcomeScreen from "./screens/welcomeScreen/welcomeScreen";

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
    {/* showSplash ? <SplashScreen /> : <WellcomeScreen /> */}

    
    </>

  );
}

export default App;
