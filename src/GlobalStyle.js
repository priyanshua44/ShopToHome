import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
  /* font-size: 62.5%; */
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif !important;
}


body{
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif !important;
    /* max-width: 100vw; */
}


.btn{
    /* width: 20px; */
  }

  @media (max-width: 1024px)  {
    .btn {
      /* width: min-content; */
      /* font-size: 0.5rem; */
    }
  }



@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 70%;
    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

    a{
      text-decoration: none;
      color: black;
    }


`;
