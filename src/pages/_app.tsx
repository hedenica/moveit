import { ThemeProvider } from '../contexts/ThemeContext'

import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={pageProps.theme} checked={pageProps.checked}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
