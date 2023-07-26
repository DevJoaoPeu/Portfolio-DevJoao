import { styled } from "styled-components";

export const Container = styled.div`
 padding: 1rem 0;
  h1{
   color: var(--white);
   text-align: center;
   margin: 2.5rem 0 ;
  }

  @media screen and (max-width: 768px) {
      max-width: 755px;

      h1{
        font-size: 1.7rem;
      }
  }

`

export const ContainerMain = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: auto;
  color:  var(--white);

  @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
  }
 
`

export const Section = styled.div`
border: 1px solid var(--white);
width: 15.625rem;
padding: 30px;
border-radius: 7px;
h3{
    text-align: center;
    margin-bottom: 3rem;
}

`
export const Divsion = styled.div`
display: flex;
margin: 10px;
gap: 10px;

p{
  font-size: 16px;
}
`







