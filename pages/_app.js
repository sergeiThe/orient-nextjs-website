import MenuContextProvider from '../store/menu-context'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  )
}

export default MyApp
