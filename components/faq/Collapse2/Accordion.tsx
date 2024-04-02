import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { HeadingText, ParagraphText } from '@/__style/global.style';

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

  /* width: 100%; */
  
  @media only screen and (min-width: 1728px){
  /* border: 3px solid green; */
  min-width: 893px;
  }

  @media only screen and (min-width:992px) and (max-width:1727px){
  /* border: 1px solid green; */
min-width: 800px;
/* width: 100%; */
}

@media only screen and (min-width:769px) and (max-width:991px){
  min-width: 700px;
}

@media only screen and (max-width:768px){
  /* border: 1px solid red; */
  max-width: 400px;

}
`;

const AccordionItem = styled.div`
display: flex;
flex-direction: column;
/* box-shadow: 0px 4px 6.599999904632568px 0px #00000040; */
box-shadow: 0px 4px 6.599999904632568px 0px #9c9b9b40;
border-radius: 10.98px;
margin-bottom: 24.89px;

@media only screen and (min-width: 1728px){
border: 1px solid #ECECEC;
  padding: 0px 25px 0px 25px;

  }

  @media only screen and (min-width:992px) and (max-width:1727px){
/* padding: 0px 23px 0px 23px; */
padding: 0px 23px 0px 23px;

}

@media only screen and (min-width:769px) and (max-width:991px){
  /* min-width: 700px; */
padding: 0px 18px 0px 18px;
}

@media only screen and (max-width:768px){
  /* min-width: 700px; */
padding: 0px 15px 0px 15px;
}

`;

const AccordionTitle = styled(HeadingText)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #FFFFFF;
  /* box-shadow: 0px 4px 6.599999904632568px 0px #00000040; */
  text-align: left;
color: #202020;
font-weight: 600;


@media only screen and (min-width: 1728px){
  padding: 10px 50px 10px 0;
font-size: 21px;
line-height: 26.46px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
padding: 9px 45px 9px 0;
font-size: 20px;
line-height: 20.46px;
}

@media only screen and (min-width:769px) and (max-width:991px){
  padding: 7px 40px 7px 0;
font-size: 18px;
line-height: 20.46px;
}
@media only screen and (max-width:768px){
  padding: 7px 5px 7px 0;
font-size: 16px;
line-height: 20.16px;
}
`;

const AccordionContent = styled(ParagraphText)`
  border-top: 1px solid #EEEEEE;
font-weight: 400;
text-align: left;
color: #202020;

@media only screen and (min-width:1728px){
  padding: 10px 0;
font-size: 16px;
line-height: 28px;
}

@media only screen and (min-width:992px) and (max-width:1727px){
  padding: 9px 0;
font-size: 15px;
line-height: 25px;


@media only screen and (min-width:769px) and (max-width:991px){
  padding: 8px 0;
font-size: 14px;
line-height: 24.46px;
}
@media only screen and (max-width:768px){
font-size: 14px;
line-height: 24px;
}
}
`;
