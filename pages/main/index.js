import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

import Link from 'next/link'
import Image from 'next/image'
import styles from "../../components/main.module.css"
import s from "../../components/timeline.module.css"
import t from "../../components/timeline2.module.css"

import one from "../../components/yourcalc.png"
import two from "../../components/discordbots.png"
import three from "../../components/aboutme.png"
import four from "../../components/github.png"
import five from "../../components/api.png"

export default function Main() {
    return (
      <div className={styles.mainwrap}>
        <div className={styles.container}>
          <Link href="/main/about"><Image className={styles.image} src={three}></Image></Link>
        </div>
      </div>
    )
}
function Timeline() {
  return (
    <section className={t.ct}>
      <div className={t.ti}>
        <div className={t.tbg}></div>
        <div className={t.ty} >
          <p>How I started</p>
        </div>
        <div className={t.tc}>
          <div className={s.bg}>
            <ul className={s.ul}>
              <li className={s.li}>
                <div className={[styles.container, s.ct].join(" ")}>
                  <Link href="/projects/bots"><Image className={styles.image} src={two}></Image></Link>
                </div>
              </li>
              <li className={s.li}>
                <div className={[styles.container, s.ct].join(" ")}>
                  <Link href="/projects/yourcalc"><Image className={styles.image} src={one}></Image></Link>
                </div>
              </li>
              <li className={s.li}>
                <div className={[styles.container, s.ct].join(" ")}>
                <Link href="/projects/api"><Image className={styles.image} src={five}></Image></Link>
                </div>
              </li>
              <li className={s.li}>
                <div className={[styles.container, s.ct].join(" ")}>
                <a target="_blank" href="https://github.com/rrpie"><Image className={styles.image} src={four}></Image></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={t.ti}>
        <div className={t.tbg} style={{backgroundColor: "rgb(1, 255, 1)"}}></div>
        <div className={t.ty} >
          <p>2011</p>
        </div>
        <div className={t.tc}>
          <h1>Lorem ipsum dolor sit</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit.
            </p>
        </div>
      </div>
    </section>
  )
}
  
  Main.getLayout = function getLayout(page) {
    return (
      //<Sidebar />
      <Layout>
        {page}
        <Timeline/>
      </Layout>
    )
  }
  