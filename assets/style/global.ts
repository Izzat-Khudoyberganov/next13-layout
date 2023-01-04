import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  
  button {
    background-color: white;
    border-style: none;
  }

  button:hover {
    cursor: pointer;
  }

  input {
    border-style: none;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export default GlobalStyles
