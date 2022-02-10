import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Metatags from '../components/Metatags'

import '../styles/globals.scss'
import '../styles/hljs_github_dark.scss'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Metatags />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
