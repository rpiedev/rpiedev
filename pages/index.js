import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import s from "../components/portfolio.module.css"
import t from "../components/topbar.module.css"

import me from "../components/me(1)(1).png"
import arrow from "../components/arrow(3).png"

import projdisc from "../components/projicondisc.png"
import projasm from "../components/projiconasm.png"
import projme from "../components/projiconme.png"
import projunity from "../components/projiconunity.png"
import projmc from "../components/projiconmc.png"
import projidoc from "../components/projiconidoc.png"

import gitimage from "../components/linkicongit(1).png"
import liimage from "../components/linkiconli.png"
import itchimage from "../components/linkiconitch.png"
import discimage from "../components/linkicondiscord.png"
import mailimage from "../components/linkiconmail.png"
import dlimage from "../components/linkiconmcpedl.png"
import resimage from "../components/linkiconres.png"

import aboutpoll from "../components/pollframe(1).png"
import mewny from "../components/wnyintersection.jpg"
import pizzajes from "../components/pizzajesus.jpg"


function topBar() {
  return (
    <div className={t.cont}>
      <div className={t.opts}>
      </div>
    </div>
  )
}
const projects = [
  {
    name: "Me",
    sub: "English/Spanish",
    img: projme,
    cont: "A programmer from West New York, NJ."
  },
  {
    name: "Discord Bots",
    sub: "Node.js",
    img: projdisc,
    cont: "Some of my first ever projects. Through these, I learned to code, speak with clients about features, and collaborate."
  },
  {
    name: "ASM Sim",
    sub: "HTML/CSS/JS",
    img: projasm,
    cont: "An unfinished simulation of x86-64 Assembler written in JavaScript under the guidance of my Microprocessor Systems Professor."
  },
  {
    name: "IDOC",
    sub: "HTML/CSS/JS",
    img: projidoc,
    cont: "A research project of Professor Dov Kruger, who I am working under."
  },
  {
    name: "Unity",
    sub: "C#",
    img: projunity,
    cont: "An outlet for my personal project and game ideas."
  },
  {
    name: "MC Mods",
    sub: "JSON/JS",
    img: projmc,
    cont: "An endeavor I take on with my friends where we make mods together, since we play Minecraft anyway, and we can share them online"
  }
]
export default function portfolio() {
  const [screenContent, screenContentChange] = useState(screenme);
  function switchScreen(key) {
    switch (key) {
      case "Me":
        screenContentChange(screenme);
        break;
      case "Discord Bots":
        screenContentChange(screenbots);
        break;
    }
  }
  var projectList = [];
  projects.forEach(element => {
    var proj = <li key={element.name} className={s.proj}>
                <div className={s.projHead}>
                  <div className={s.projimg}><Image src={element.img} fill={true} sizes='600px' alt={"Image of"+element.name} /></div>
                  <div className={s.projText}>
                    <div className={s.projName}>{element.name}</div>
                    <div className={s.projSub}>{element.sub}</div>
                  </div>
                  <div onClick={() => switchScreen(element.name)} className={s.parrow}><Image src={arrow} fill={true} sizes='2rem' alt="arrow to click if you want to show this on screen"/></div>
                </div>
                <p className={s.projContent}>{element.cont}</p>
              </li>
    projectList.push(proj)
    projectList.push(<hr key={element.name+"hr"} className={s.phr}/>)
  });
  return (
    <>
      {topBar()}
      <div className={s.bg}></div>
      <div className={s.whole}>
        <div className={s.topHalf}>
        </div>
        <div className={s.mebg}></div>
        <div className={s.mee}><Image src={me} width={400}/></div>
        <div className={s.links}>
          <a className={s.linkimage} style={{backgroundColor:"#e84f36"}} href="https://redassser.itch.io/" target='_blank'><Image src={itchimage} fill={true} sizes='5.2rem'/></a>
          <a className={s.linkimage} style={{backgroundColor:"#fbb900"}} href="/Ryan_Piedrahita_Resume.pdf" target="_blank"><Image src={resimage} fill={true} sizes='5.2rem'/></a>
          <a className={s.linkimage} style={{backgroundColor:"#ddce02"}} href="mailto:rpiedrah@stevens.edu"><Image src={mailimage} fill={true} sizes='5.2rem'/></a>
          <a className={s.linkimage} style={{backgroundColor:"#65b33d"}} href="https://mcpedl.com/user/renegades/" target='_blank'><Image src={dlimage} fill={true} sizes='5.2rem'/></a>
          <a className={s.linkimage} style={{backgroundColor:"#00aae5"}} href="https://discordapp.com/users/265953906951979019" target='_blank'><Image src={discimage} fill={true} sizes='5.2rem'/></a>
          <a className={s.linkimage} style={{backgroundColor:"#3c4395"}} href="https://www.linkedin.com/in/ryanpie/" target='_blank'><Image src={liimage} fill={true} sizes='5.2rem'/></a>
          <a className={s.linkimage} style={{backgroundColor:"#6b4795"}} href="https://github.com/redassser" target='_blank'><Image src={gitimage} fill={true} sizes='5.2rem'/></a>
        </div>
        <div className={s.bottomHalf}>
          <ul className={s.projects} id='projects'>
            {projectList}
          </ul>
          <div className={s.screen}>
            {screenContent}
          </div>
        </div>
      </div>
    </>
  )
}
const screenbots = <div className={s.screenbg}>
            <h3>My First Foray Into Programming</h3>
            <div><Image className={s.screenimg} width={340} src={aboutpoll} alt="Screenshot of one of my bots"/></div>
            <p>
              I began making discord bots during the summer after freshman year of highschool. I had never really programmed anything before, and here
              I was trying to create a full node.js event-driven back-end, because I wanted to.
            </p>
            <p>
              It wasn't so hard, at first. It started with a simple how-to guide, something like, "make your first discord bot little to no code!".
              It was very satisfying setting up this environment and making a custom little bot to mess around with, but <span>I had so many ideas</span>.
              So many ideas and ideas from my friends that were simply not contained within the basic guide. 
              <br/><br/>
              I needed more. I needed to code.
            </p>
            <p>
              I delved into the world of MDN javascript docs and discord.js, which is an extremely well-maintained npm package with some of the best documentation you can find, 
              so looking back, it was probably as best a starting point I could've gotten.I got REALLY into coding that summer. I had never taken a coding class
              or even seen code for real before, so the learning process was difficult and fraught with me trying to understand high level concepts like event loops and multi thread
              programming when I didn't even really know what types were yet, so you can imagine I spent a lot of time just trying to get things to work.
            </p>
            <p>
              I became infatuated with coming up with new ideas for cool bot features and then spending a few days trying to implement them, so when 
              the owner of one of the community servers I was in (just a little community around a game I played) asked if anyone could make them a bot, I jumped on the chance to 
              put my skills to the test. 
            </p>
          </div>
const screenme = <div className={s.screenbg}>
            <h3>Where I Come From</h3>
            <Image className={s.screenimg} width={340} src={mewny} alt="Intersection on Bergenline in WNY. Used to be Gamestop"/>
            <p>
              I am a Colombian-American from West New York, NJ, a desnsely populated town across the hudson river from New York City. The town is nearly entirely hispanic 
              and majority immigrant. Being so close to NYC is a blessing and a curse, but I love this this town and community.
            </p>
            <p>
              I was raised by my mother and her parents, my grandparents.
              <br/>
              My favorite food is pizza, and being so close to NYC and brooklyn means the pizza here is always top notch.
            </p>
            <h3>Who I am</h3>
            <div><Image className={s.screenimg} width={380} src={pizzajes} alt="Intersection on Bergenline in WNY. Used to be Gamestop"/></div>
            <p>
              My friends are everything to me, and we're always doing something together, whether its playing games or hanging out
            </p>
          </div>