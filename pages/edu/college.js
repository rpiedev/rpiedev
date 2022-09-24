import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

export default function About() {
  return (
    <section>
      COLLEGE
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