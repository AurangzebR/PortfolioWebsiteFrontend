import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps,session }) {
  return (
    <Component {...pageProps} />
  )
  //<SessionProvider session={session}>
      
  //  </SessionProvider>
  
}

export default MyApp
