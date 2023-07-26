import { styled } from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   max-width: 1100px;
   margin: auto;
   padding: 2rem 0 7rem 0;
   align-items: center;

   @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 755px;
    padding: 2rem 0;
  }
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   max-width: 600px;
 
   h1{
    color: var(--white);
    font-size: 40px;
    @media screen and (max-width: 768px) {
    font-size: 30px;
  }
   }

   p{
    color: var(--gray);
    font-size: 17px;

    @media screen and (max-width: 768px) {
      padding: 0 10px;
  }
   }

   @media screen and (max-width: 768px) {
      align-items: center;
      text-align: center;
    
  }

`

export const Div1 = styled.div`
   a{
     background-color: #fff;
      display: flex;
      align-items: center;
      color: #000;
      gap: 1rem;
      font-size: 1rem;
      border-radius: 7px;
      width: fit-content;
      padding: .7rem 1rem;
      font-weight: 600;
      border: 1px solid #fff;
      transition: background ease-in .5s;
   }:hover{
    background-color: transparent;
    color: #fff;
   }
   
   @media screen and (max-width: 768px) {
      padding: 10px 30px;

      a{
         font-size: 1rem;
      }
  }
`

export const Div2 = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  a{
   color: var(--white);
  }

  @media screen and (max-width: 768px) {
      font-size: 1.8rem;
  }
`

export const Logo = styled.div`
  img{
    width: 270px;
    border-radius: 100%;
    @media screen and (max-width: 768px) {
      width: 250px;
      margin-top: 2rem;
  }
  }

  
`
