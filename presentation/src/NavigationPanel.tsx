import React from 'react';

export interface NavigationPanelProps {
  label?: string;
  items: Array<string>;
}

const NavigationPanel: React.FC<NavigationPanelProps> = props => {
  return (
    <div>
      {props.label && <p>{props.label}</p>}
      <ol>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default NavigationPanel;
