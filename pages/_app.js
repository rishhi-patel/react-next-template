import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head"
import { useEffect } from "react"
import Layout from "../components/layout"
import "../styles/globals.scss"
import { wrapper } from "../store"

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>Bankio - Reactjs + Nextjs Template</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Bankio - Reactjs + Nextjs Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(App)
