import '../styles/globals.css'
import AuthProvider from './authProvider'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
     </AuthProvider>
  )
}

export default MyApp
