import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --primary:#171923;
    --secondary: #8a2be2;
    --gray: #808077;
    --white: #FFF;
  }

  body{
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Dosis', sans-serif;
    background-color: var(--primary);

    overflow-x: hidden;
  }

  li{list-style: none;}
  a{text-decoration: none;}
`;
