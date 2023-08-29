

import styled from "@emotion/styled";



export const FooterSubscribeWrapper = styled.form`
  
  flex-direction: column;
  justify-content: center;
  
  

  @media screen and (min-width: 768px) {
  
   width: 309px;
  }

  @media screen and (min-width: 1440px) {
   
  }
`;



export const FooterSubscribetext = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #f3f3f3;
  margin-bottom: 24px;

  
 @media screen and (min-width: 768px) {
   font-size: 18px;
    line-height: calc(24 / 18);
  }
  
`;

export const FooterSubscribeLabel = styled.label`
  
  display: flex;
  width: 100%;
  height: 54px;
   margin: 0 auto;
  margin-bottom: 18px;
 
  

  @media screen and (min-width: 768px) {
    width: 309px;
    
  }

  @media screen and (min-width: 1440px) {
    
    
  }
`;

export const FooterSubscribeInput = styled.input`
 height: 54px;
  color: #F3F3F3;
  opacity: 1;
  transition: border-color 0.5s ease-in-out;
  border-color: #F3F3F3;
  background-color: transparent;
   border-radius: 200px;
  border: 1px solid  #F3F3F3;
  padding-left: 18px;
  width: 100%;
 

  &:hover,
  &:focus {
    color: #F3F3F3;
    border-color: #F3F3F3;
  }

 

  @media screen and (min-width: 768px) {
    line-height: calc(26 / 17);
    
  }
`;



export const FooterSubscribeButton = styled.button`
 
  height: 54px;
  width: 100%;
  color: #F3F3F3;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);

  border-radius: 200px;
  border: 1px solid  #F3F3F3;
  margin-bottom: 80px;

  transition: color 0.5s, border-color 0.5s;

  &:not(:disabled):hover {
    border-color: color: #F3F3F3;;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    width: 309px;

    font-size: 17px;
    line-height: calc(26 / 17);
  }
`;