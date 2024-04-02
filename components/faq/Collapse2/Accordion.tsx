// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

// interface AccordionProps {
//   items: { title: string; content: string }[];
// }

// const Accordion: React.FC<AccordionProps> = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <AccordionContainer>
//       {items.map((item, index) => (
//         <AccordionItem key={index}>
//           <AccordionTitle onClick={() => toggleAccordion(index)}>
//             {item.title}
//             {activeIndex === index ? <MinusOutlined /> : <PlusOutlined />}
//           </AccordionTitle>
//           {activeIndex === index && <AccordionContent>{item.content}</AccordionContent>}
//         </AccordionItem>
//       ))}
//     </AccordionContainer>
//   );
// };

// export default Accordion;

// const AccordionContainer = styled.div`
//   width: 100%;
// `;

// const AccordionItem = styled.div`
//   border-bottom: 1px solid #e0e0e0;
// `;

// const AccordionTitle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #f5f5f5;
//   cursor: pointer;
// `;

// const AccordionContent = styled.div`
//   padding: 10px;
// `;



import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionTitle onClick={() => toggleAccordion(index)}>
            {item.title}
            {activeIndex === index ? <MinusOutlined /> : <PlusOutlined />}
          </AccordionTitle>
          {activeIndex === index && <AccordionContent>{item.content}</AccordionContent>}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 10px;
`;
