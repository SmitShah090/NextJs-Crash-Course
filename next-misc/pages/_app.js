import 'styles/globals.css'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import "styles/layout.css"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
  <>
    <Head>
      <title>Next Tutorial</title>
      <meta name='description' content='NextJs detail tutorial' />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />  
  </>
  )
}

export default MyApp
