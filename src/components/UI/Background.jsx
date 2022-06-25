import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="bg-veryLightGray dark:bg-veryDarkBlueBG min-h-screen px-5 pt-20 pb-10 sm:px-20">
      {children}
    </div>
  );
};

export default Background;
