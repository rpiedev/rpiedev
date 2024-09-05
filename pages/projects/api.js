import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

export default function About() {
  return (
    <div>
      <p>My friend and I have a server in his house that we ssh into and do a lot of stuff on.
        It's where we host my site and discord bots, and where he tests with scripts and stuff. 
        <br/> I wrote up a few APIs we use sometimes to keep track of the server.
        <br/> We have CPU temp tracking and stats for the bedrock server. 
      </p>
        <a target="_blank" href='http://rru.ddns.net/'>API directory</a>
        <br/>
        <a target="_blank" href='https://github.com/rrpie/rru'>The github for this</a>
        <br/>
      <p>My friend wrote the bash script that retrieves the temps and writes it to a json</p>
    </div>
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