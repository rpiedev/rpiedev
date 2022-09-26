import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Image from 'next/image'
import ryan from "../../components/ryanpic.png"

export default function About() {
  return (
    <section>
      <p>I am cool :)</p>
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
