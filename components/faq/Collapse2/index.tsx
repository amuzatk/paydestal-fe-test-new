import React from 'react';
import Accordion from './Accordion';

const items = [
  { title: 'What is paydestal?', content: 'We use as filler text for layouts, non-readability is of great before importancebut because those who do not know how to pursue pleasure rationally encounter consequences.' },
  { title: 'Is it possible to integrate plugin?', content: 'Yes, here is how you can get started.' },
  { title: 'What services do you offer?', content: 'Here is a list of our services.' },
  { title: 'Do you offer banking services?', content: 'Not at the moment, but we have that in the pipeline. Stay tuned!' },
  { title: 'What do I need to get started?', content: 'Here is a list of our services.' },
  { title: 'Where is Paydestal located?', content: 'Our Head office is located at 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria.' },
];

const FaqCollapse2: React.FC = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default FaqCollapse2;
