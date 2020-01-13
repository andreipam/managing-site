import React from 'react';

import NavigationPanel from './NavigationPanel';

import './ContentSlide.css';

export interface ContentSlideProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const ContentSlide: React.FC<ContentSlideProps> = props => {
  return (
    <div className="ContentSlide">
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        {props.children}
      </div>
      <NavigationPanel
        label="What's ahead?"
        items={['First', 'Second', 'Third', 'Fourth']}
      />
    </div>
  );
};

export default ContentSlide;
