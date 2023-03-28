import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { fraunces, novaMono } from '@/utils/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >
        {`
          :root {
            --font-serif ${fraunces.style.fontFamily};
            --font-mono ${novaMono.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
