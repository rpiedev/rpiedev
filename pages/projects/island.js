import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Screen from "../../components/screen.js";
import styles from "../../components/island.module.css"

export default function About() {
  return (
    <section>
        <h3>This was my first look -</h3>
        <p>- into random generation and its applications, and my first foray into using canvas.
            The gradient is generated in 2D and then colored either in greyscale (simplex) or 
            colored to look like an archipellago/islands. There's variable resolution, 
            random or set seed, and color sensitivity. It helped me understand terrain generation
            a bit more, and maybe it'll help me sometime. 
        </p>
        <hr/>
        <div className={styles.canvascont}>
            <Screen/>
        </div>
    </section>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}