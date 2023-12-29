import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#A3A3A3',
  verde: '#10AC84'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`
