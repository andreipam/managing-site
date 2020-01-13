import React from 'react';

import ContentSlide from './ContentSlide';
import TitleSlide from './TitleSlide';

import './App.css';

const App: React.FC = () => {
  const section2 = '2. How things can get painful';
  const section3 = "3. Real world strategies I've used";
  return (
    <div className="App">
      <TitleSlide />
      <ContentSlide title={'1. When a project gets "large"'}>...</ContentSlide>
      <ContentSlide title={section2}>...</ContentSlide>
      <ContentSlide
        title="2.1. Costs behind breaking up components"
        subTitle={section2}
      >
        ...
      </ContentSlide>
      <ContentSlide
        title="2.2. Similar, yet non-identical UI components"
        subTitle={section2}
      >
        ...
      </ContentSlide>
      <ContentSlide
        title="2.3. Unsustainable testing and releasing effort"
        subTitle={section2}
      >
        ...
      </ContentSlide>
      <ContentSlide title={section3}>...</ContentSlide>
      <ContentSlide
        title="3.1. Wrap components based upon responsibility"
        subTitle={section3}
      >
        ...
      </ContentSlide>
      <ContentSlide
        title="3.2. Apply domain-driven design to components"
        subTitle={section3}
      >
        ...
      </ContentSlide>
      <ContentSlide
        title="3.3. Create common (or shared) packages"
        subTitle={section3}
      >
        ...
      </ContentSlide>
      <ContentSlide title="4. Weighing up the choices">...</ContentSlide>
      <ContentSlide title="5. Predictions for the future">...</ContentSlide>
    </div>
  );
};

export default App;
