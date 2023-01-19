import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

export default function Bots() {
  return (
    <section>
      <h1 style={{textAlign:"center"}}>I started out my programming career with discord bots the summer before highschool.</h1>
      
    </section>
  )
}

Bots.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}