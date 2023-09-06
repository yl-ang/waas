import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={`container p-8 mx-auto xl:px-0 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;