import React, { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="text-xl font-semibold mb-4">{title}</div>
        {children}
    </div>
  );
};

export default Card;
