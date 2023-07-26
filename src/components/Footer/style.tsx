import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 5rem auto 2rem auto;
  flex-direction: column;
  border-top: 2px solid var(--white);
  gap: 2rem;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    gap: 1.5rem;
    justify-content: center;
    margin-top: 3rem;
    padding: 2rem 0;
    overflow-x: hidden;
  }
`

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    gap: 15px;
    font-size: 1.4rem;
    color: var(--white);
    background-color: var(--white);
    color: black;
    font-weight: 600;
    align-items: center;
    padding: 10px 2.5rem;
    border-radius: 10px;
    transition: background 0.5s ease-in;
    border: 1px solid #fff;

    @media screen and (max-width: 768px) {
      font-size: .8rem;
      padding: 7px 1rem;
    }
  }:hover{
    background-color: transparent;
    color: #fff;
  }

  img {
    width: 150px;

    @media screen and (max-width: 768px) {
      width: 100px;
    }
  }

  @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`

export const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--white);

  div {
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    a{
      color: var(--white);
     }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 20px;
    font-size: .7rem;

    div{
     font-size: 1.5rem;
    }
  }
`
