import '../styles/globals.css'
import Footer from './../components/Footer'
import NavBar from './../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
