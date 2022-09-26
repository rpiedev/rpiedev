import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Image from 'next/image'
import ryan from "../../components/ryanpic.png"

export default function About() {
  return (
    <section>
      <p>
        I'm Ryan Piedrahita, from West New York, NJ. I'm a programmer and college 
        student who likes to talk and really likes to listen. 
      </p>
      <p>
         I hope to become a Software Engineer, solving problems and inventing solutions! 
         I also like to educate, working with and teaching kids comes naturally, as well 
         as conversation and empathy. 
      </p>
      <p>
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
