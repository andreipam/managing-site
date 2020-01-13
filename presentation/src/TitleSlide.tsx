import React from 'react';

import NavigationPanel from './NavigationPanel';

import './TitleSlide.css';

const TitleSlide: React.FC = () => {
  return (
    <div className="TitleSlide">
      <div>
        <h1>Managing "Large" React Projects</h1>
      </div>
      <NavigationPanel
        label="What's ahead?"
        items={['First', 'Second', 'Third', 'Fourth']}
      />
    </div>
  );
};

export default TitleSlide;
