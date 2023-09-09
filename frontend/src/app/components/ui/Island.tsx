import React, { ReactNode } from "react";
import { useState, useEffect } from "react";

type IslandProps = {
  children: ReactNode;
};

const Island: React.FC<IslandProps> = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const checkMobileView = () => {
    setIsMobileView(window.innerWidth <= 768); 
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobileView);
    checkMobileView();

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <div className={`bg-white p-4 md:h-full ${isMobileView ? 'fixed bottom-0 left-0 w-full h-1/4' : ''}`}>
      {children}
    </div>
  );
};

export default Island;
