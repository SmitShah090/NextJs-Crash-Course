import Footer from "../components/Layout/Footer"
import Head from 'next/head'

export default function About(){
    return(
        <>
            <Head>
                <title>Next Tutorial</title>
                <meta name='description' content='NextJs detail tutorial' />
            </Head>
            <h1 className="content">
                About
            </h1>
        </>
    )
}

About.getLayout = function PageLayout(page){
    return(
        <>
            {page}
            <Footer />
        </>
    )
}