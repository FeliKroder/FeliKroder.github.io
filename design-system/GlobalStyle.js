import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${poppins.style.fontFamily};
  font-size: 16pt;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

body {

    }
  }

  main {

  } 
`;

export default GlobalStyle;
