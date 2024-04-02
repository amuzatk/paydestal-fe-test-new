import React from 'react';
import Accordion from './Accordion';

const items = [
  { title: 'What is paydestal?', content: 'We use as filler text for layouts, non-readability...' },
  { title: 'Is it possible to integrate plugin?', content: 'We use as filler text for layouts, non-readability...' },
  { title: 'What services do you offer?', content: 'We use as filler text for layouts, non-readability...' },
  { title: 'Do you offer banking services?', content: 'We use as filler text for layouts, non-readability...' },
  { title: 'What do I need to get started?', content: 'We use as filler text for layouts, non-readability...' },
  { title: 'Where is Paydestal located?', content: 'We use as filler text for layouts, non-readability...' },
];

const FaqCollapse2: React.FC = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default FaqCollapse2;
