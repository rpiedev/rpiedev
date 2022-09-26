import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ryan Pie</title>
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.foot}>
        <p>This site was made with React/Next.js and is hosted on a server in my friend's house.</p>
        <p><b>VERY UNDER CONSTRUCTION!!</b></p>
      </footer>
    </>
  )
}
