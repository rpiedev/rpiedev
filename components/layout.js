import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <title>Ryan Pie</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
