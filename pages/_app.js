import { createGlobalStyle, ThemeProvider } from 'styled-components' //biblioteca externa
import {AlurakutStyles} from '../src/lib/AlurakutCommons';
//estilos aplicados globalmente, vem por padrão, é usado como se fosse um componente

//objeto global de estilo
const GlobalStyle = createGlobalStyle`
  /*reset css vem por padrão no react e pode ser chamado com (*) */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    
    background-color: #D9E6F6;
    font-family: sans-serif;

  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles} //concatenação com uma variável que recebe uma string

`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
