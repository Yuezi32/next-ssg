import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Next.js演示项目" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}