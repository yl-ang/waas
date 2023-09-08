import React, { ReactNode } from "react";

type IslandProps = {
  children: ReactNode;
};

const Island: React.FC<IslandProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 border flex-1 h-full">
      {children}
    </div>
  );
};

export default Island;
