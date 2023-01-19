import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Image from 'next/image'

import ryan from "../../components/ryanpic.png"
import ryansmal from "../../components/about/ryansmal.png"

export default function About() {
  return (
    <section>
      <div style={{float:"left", margin:"10px", marginTop:"30px"}}><Image src={ryansmal}/></div>
      <p style={{textAlign: "center"}}>
        I'm Ryan Piedrahita, a Colombian-american from <br/> West New York (New Jersey) 
      </p>
      <p>
         I see software engineering as sort of the modern day blacksmithy. Using the tools of
         the craft, I mold the flowing, featureless text and strike the molten data with
         precision.
      </p>
      <p style={{textAlign: "center"}}>
        The brave knight need not forge the steel himself to wield his weapon with grace and dignity.
      </p>
      <p>
        I'm also pretty good with people. My friends say I have too much patience, but I just love listening to 
        people, no matter what they're saying.
      </p>
      <p style={{textAlign: "center"}}>
        Ultimate goal: become the President, do good in the world, and finish this website
      </p>
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
