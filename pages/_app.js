import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TWFNKD5XCY"></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TWFNKD5XCY');`
          }}
        />
      </Head>
      < Component {...pageProps} />
    </>
  )
}
