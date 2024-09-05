import Link from 'next/link'
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'

export default function About() {
  return (
    <section>
      <h3>Ryan Piedrahita</h3> <hr/>
        <p>
            A Computer Engineering major at Stevens Institute of Technology 
            with a hobby of full stack webapp development and future in 
            Software Engineering. Programming in node environments for 
            4+ years, I have a lot of hands-on experience with client 
            interaction, git version control, team development, research 
            and problem-solving. I drive to expand my horizons, learning 
            concepts and applying them to solve problems in new and 
            interesting ways, to make my mark on the industry and the world. 
        </p>
        <h3>Projects</h3> <hr/>
        <h4>yourcalc.net</h4>
        <p>
            <a href="https://github.com/rrpie/yourcalc">
                github.com/rrpie/yourcalc
            </a> 
            * 
            <a href="http://yourcalc.net">
                yourcalc.net
            </a>
        </p>
        <ul>
            <li>
                Client-side, React.js powered, dynamic webpage with a modern scientific 
                calculator interface.
            </li>
            <li>
                Top-down Operand Precedence parsing algorithm 
                combined with regex tokenization facilitate 
                PEMDAS-accurate solutions.
            </li>
            <li>
                <b>Don't own the domain anymore, but the calculator can still be found here </b><Link href="/projects/yourcalc">YOURCALC</Link>
            </li>
        </ul>
        <h4>autovc</h4>
        <p>
            <a href="https://github.com/rrpie/yourcalc">
                github.com/rrpie/autovc
            </a> 
            * 
            <a href="https://top.gg/bot/775891705270239263">
                top.gg
            </a>
            * 
            <a href="https://discord.bots.gg/bots/775891705270239263">
                discord.bots.gg
            </a>
        </p>
        <ul>
            <li>
                Server-side, event-driven Discord chat bot, 
                designed to improve user experience by streamlining voice 
                chat presence and minimizing screen real estate.
            </li>
            <li>
                Asynchronous event handling allows the chat bot to 
                respond and handle hundreds of Discord guilds at any 
                time with minimal memory usage.
            </li>
        </ul>
        <h3>Experience</h3> <hr/>
        <h4>NJIT Pre-College Program</h4>
        <p>
            Teacher's Assistant, Summer 2022
        </p>
        <ul>
            <li>
                Pick up, lead, manage and take care of 20+ 8th grade students on the
                NJIT campus during their time in a program designed to encourage their
                ingenuity with hands-on projects and get them interested in a future 
                in STEM. 
            </li>
        </ul>
        <h4>West New York Swim Club</h4>
        <p>
            Front Desk, Summer 2021
        </p>
        <ul>
            <li>
                Greet hundreds of visitors a day and determine their town residency 
                via proof of address, amicably representing the town administration 
                by balancing professionalism and approachability.   
            </li>
            <li>
                Track visitor count and work with Head Lifeguard to ensure 
                a neighborly experience for all families.
            </li>
        </ul>
        <h3>Education</h3> <hr/>
        <h4>Stevens Institute of Technology</h4>
        <p>
            Bachelor of Science (B.S.) Computer Engineering (Expected Graduation Jun 2025)
        </p>
        <ul>
            <li>
                <b>Relevant Coursework:</b> Intro to Programming and Algorithmic 
                Thinking, Vectors and Matrices, Discrete Structures 
            </li>
        </ul>
        <h3>Additional Skills</h3> <hr/>
        <ul>
            <li>
                Full stack Next.js/Node.js, with 4+ years of hobbyist 
                experience, and a familiarity with C++, CSS, and Python.
            </li>
            <li>
                Experience with Web-app deployment and implementation of an Nginx reverse-proxy.
            </li>
            <li>
                Team-oriented, dependable, and willing to lead and push for my ideas.
            </li>
            <li>
                Spanish
            </li>
        </ul>
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