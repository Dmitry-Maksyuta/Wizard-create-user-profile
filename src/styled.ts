import styled, { createGlobalStyle } from 'styled-components'
import OpenSansBolt from './assets/fonts/OpenSans-Bold.ttf'
import OpenSansLight from './assets/fonts/OpenSans-Light.ttf'
import OpenSansMedium from './assets/fonts/OpenSans-Medium.ttf'
import OpenSansRegular from './assets/fonts/OpenSans-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: local('Open Sans'),
    url(${OpenSansBolt}) format('ttf'),
    url(${OpenSansLight}) format('ttf'),
    url(${OpenSansMedium}) format('ttf'),
    url(${OpenSansRegular}) format('ttf');
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`

export const Wrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`

export default GlobalStyle
