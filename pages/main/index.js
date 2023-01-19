import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

import Link from 'next/link'
import Image from 'next/image'
import styles from "../../components/main.module.css"

import one from "../../components/yourcalc.png"
import two from "../../components/discordbots.png"
import three from "../../components/aboutme.png"
import four from "../../components/github.png"

export default function Main() {
    return (
      <div className={styles.mainwrap}>
        <div className={styles.container}>
          <Link href="/main/about"><Image className={styles.image} src={three}></Image></Link>
        </div>
        <div className={styles.container}>
          <Link href="/projects/yourcalc"><Image className={styles.image} src={one}></Image></Link>
        </div>
        <div className={styles.container}>
          <Link href="/projects/bots"><Image className={styles.image} src={two}></Image></Link>
        </div>
        <div className={styles.container}>
          <a target="_blank" href="https://github.com/redassser"><Image className={styles.image} src={four}></Image></a>
        </div>
      </div>
    )
  }
  
  Main.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Sidebar />
        {page}
      </Layout>
    )
  }
  