import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  gap: 3rem;
  padding: 5rem 0;

  @media screen and (max-width: 768px) {
    overflow-y: hidden;
    padding: 3rem 0;
    gap: 2rem;
  }
`

export const Text = styled.div`
  text-align: center;
  color: var(--white);

  @media screen and (max-width: 768px) {
    h2, h1{
      font-size: 1.5rem;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;

  span {
    font-size: 18px;
    padding: 7px 25px;
    border: 1px solid #fff;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    gap: .7rem;

    span{
      font-size: 13px;
    }
  }
`

export const Project = styled.div`
  display: flex;
  margin: auto;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const DivProject1 = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  width: 20rem;
  height: 10.625rem;
  border-radius: 10px;
  font-size: 1.2rem;
  background-position: center;
  background-size: cover;

  h4 {
    background-color: #000;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 10px;
  }

  div {
    display: flex;
    gap: 15px;
    background-color: #000;
    margin-top: 70px;
    padding: 5px 10px;
    border-radius: 10px;
    width: fit-content;

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    width: 13rem;
    height: 9rem;
    font-size: 1rem;
    div{
      margin-top: 60px;
    }
  }
`

export const DivProject2 = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  width: 20rem;
  height: 10.625rem;
  border-radius: 10px;
  font-size: 1.2rem;
  background-position: center;
  background-size: cover;

  h4 {
    background-color: #000;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 10px;
  }

  div {
    display: flex;
    gap: 15px;
    background-color: #000;
    margin-top: 70px;
    padding: 5px 10px;
    border-radius: 10px;
    width: fit-content;

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    width: 13rem;
    height: 9rem;
    font-size: 1rem;
    div{
      margin-top: 60px;
    }
  }
`

export const DivProject3 = styled.div`
 background-color: #000;
  color: #fff;
  padding: 1rem;
  width: 20rem;
  height: 10.625rem;
  border-radius: 10px;
  font-size: 1.2rem;
  background-position: center;
  background-size: cover;

  h4 {
    background-color: #000;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 10px;
  }

  div {
    display: flex;
    gap: 15px;
    background-color: #000;
    margin-top: 70px;
    padding: 5px 10px;
    border-radius: 10px;
    width: fit-content;

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    width: 13rem;
    height: 9rem;
    font-size: 1rem;
    div{
      margin-top: 60px;
    }
  }`