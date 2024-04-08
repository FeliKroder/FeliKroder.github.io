import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #ff7b7b;
  --primary-color-light: #ff6b7b;
  --secondary-color: #ff0000;
  --accent-color: #ff0065;
  --accent-color-light: #ffa8b2;
  --text-color:#000000;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: ${poppins.style.fontFamily};
  background-color: var(--primary-color);
  color: #000000
    }
  }

  main {

  } 
`;

export default GlobalStyle;
