import { styled } from "styled-components";

export const Container = styled.div`
 color: var(--white);
 background-color: #000;
 display: flex;
 flex-direction: column;
 text-align: center;
 width: 100%;
 padding: 2rem 0;
 gap: 5rem;
 border-radius: 30px;

 @media screen and (max-width: 768px) {
      gap: 2rem;
      overflow-x: hidden;
      
      h1{
        font-size: 1.6rem;
      }
  }
`
export const Section1 = styled.div`
    
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
 p{
    font-size: 1.2rem;
    
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }


 a{
    border: 1px solid var(--white);
    width: fit-content;
    margin: auto;
    background-color: var(--white);
    padding: .7rem 1.2rem;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 7px;
    color: #000;

    @media screen and (max-width: 768px) {
      padding: .5rem 1rem;
      font-size: .7em;
    }
    transition: background ease .7s;
 }:hover{
  background-color: transparent;
  color: #fff;
  
 }


`
export const Section3 = styled.div`
 display: flex;
 gap: 2.5rem;
 justify-content: space-evenly;

 @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      margin: auto;
  }
`

export const AboutContent = styled.div`
 border: 1px solid var(--white);
 padding: 2rem;
 width: 14.375rem;
 height: 11.25rem;
 font-size: 1.5rem;
 border-radius: 7px;
 display: flex;
 flex-direction: column;
 gap: 10px;
 align-items: center;

 p{
    font-size: 17px;
 }

 @media screen and (max-width: 768px) {
      width: 9rem;
      height: 6rem;
      padding: .8rem;

      h4{
        font-size: .6em;
      }

      p{
         font-size: .4em;
      }
  }
`

export const Section2 = styled.div`
    max-width: 1100px;
    margin: auto;
`
