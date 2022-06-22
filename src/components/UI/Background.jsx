import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="bg-veryLightGray dark:bg-veryDarkBlueBG min-h-screen px-20 pt-20 pb-8">
      {children}
    </div>
  );
};

export default Background;
