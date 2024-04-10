import type { AppProps } from 'next/app'
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { GlobalStyle } from '@/__style/global.style';
// import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
              <GlobalStyle />
      <Component {...pageProps} />
    </StyleSheetManager>
  );
}

export default MyApp;









// import '../styles/global.css'
// import type { AppProps } from 'next/app'
// import { StyleSheetManager } from 'styled-components';
// import isPropValid from '@emotion/is-prop-valid';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
//       <Component {...pageProps} />
//     </StyleSheetManager>
//   );
// }

// export default MyApp;
