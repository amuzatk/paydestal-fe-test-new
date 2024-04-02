// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

// interface AccordionProps {
//   items: { title: string; content: string }[];
// }

// const Accordion: React.FC<AccordionProps> = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
  
  @media only screen and (min-width: 1728px){
/* border: 1px solid yellow; */
    /* width: 893px; */
    /* height: 136px; */
  }
`;

const AccordionItem = styled.div`
display: flex;
flex-direction: column;
/* justify-content: space-around; */
/* align-items: flex-start; */
  /* border-bottom: 1px solid #e0e0e0; */
/* border: 1px solid green; */
border-radius: 10.98px;

@media only screen and (min-width: 1728px){
border: 1px solid yellow;
    width: 893px;
    /* height: 136px; */
  padding: 0px 30px 30px 30px;

  }

`;

const AccordionTitle = styled.div`

/* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  /* padding-right: 50px; */
  align-items: center;
  padding: 10px 50px 10px 0;
  cursor: pointer;
`;

const AccordionContent = styled.div`
/* border: 1px solid red; */
  padding: 10px 0;
  border-top: 1px solid black;

`;
