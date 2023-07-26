import { styled } from "styled-components";

export const Container = styled.div`
   display: flex;
   max-width: 1100px;
   justify-content: space-between;
   align-items: center;
   margin: auto;
   padding: 10px 0;
   

   @media screen and (max-width: 768px) {
     max-width: 755px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 20px;
     padding: 20px;
     
  }
`

export const Logo = styled.div`
  img{
    width: 130px;

    @media screen and (max-width: 768px) {
      width: 100px;
  }
  }
`

export const Button = styled.div`
  p{
    border: 1px solid var(--white);
    border-radius: 7px;
    padding: 8px 28px;
    font-size: 23px;
    color: var(--white);

    @media screen and (max-width: 768px) {
     font-size: 17px;
     padding: 5px 20px;
  }
  }
`
