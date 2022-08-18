import Head from 'next/head'
import '@/common/styles/frame.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My Next App</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
