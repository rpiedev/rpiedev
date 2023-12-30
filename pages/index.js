import Image from "next/image";
import s from "../components/portfolio.module.css"

import iconasm from "../components/projiconasm.png"
import iconlethal from "../components/projiconlethal.png"
import icontetris from "../components/projicontetris.png"
import iconpong from "../components/projiconpong.png"
import iconidoc from "../components/projiconidoc.png"
import iconunity from "../components/projiconunity.png"

const projects = {
  "Game Mods": {
    short: "Open source mods with 2M+ Downloads",
    desc: "Mods for the game Lethal Company. Game code analyzed in dotPeek and patched using Harmony with BepInEx. Over 2 Million combined downloads.",
    tech: ["C#", "dotPeek", "Unity", "BepInEx", "Harmony"],
    thumbnail: iconlethal,
    links: {
      "Source": "https://github.com/redassser/Lc-Flashlight",
      "Public": "https://thunderstore.io/c/lethal-company/p/Renegades/FlashlightToggle/"
    }
  },
  "Tetris Board": {
    short: "Tetris in arduino on a breadboard",
    desc: "Tetris written in Arduino and flashed onto an esp32 with an LCD screen. Plans to be written in C and remove graphics library dependency.",
    tech: ["Arduino", "circuits"],
    thumbnail: icontetris,
    links: {

    }
  },
  "Assembler JS": {
    short: "x86-64 ASM simulation written in JavaScript",
    desc: "An unfinished simulation of x86-64 Assembler written in JavaScript under the guidance of my Microprocessor Systems Professor.",
    tech: ["JavaScript", "React", "Node.js", "Assembler"],
    thumbnail: iconasm,
    links: {
      "Source": "https://github.com/redassser/ASM",
      "Sim": "https://redassser.github.io/ASM/"
    }
  },
  "Pong VHDL": {
    short: "Pong made in VHDL for class",
    desc: "Group project for Digital System Design. The task was to create software that would run on a Nexys FPGA board. We made pong!",
    tech: ["VHDL", "Graphics"],
    thumbnail: iconpong,
    links: {
      "Source": "https://github.com/redassser/487Final"
    }
  },
  "IDOC": {
    short: "A research project of Professor Dov Kruger.",
    desc: "A research project of Professor Dov Kruger. I helped a team of a few simplify the front end via creating a standard and webpacking for backend.",
    tech: ["JavaScript", "Node.js", "Webpacker"],
    thumbnail: iconidoc,
    links: {
    }
  },
  "Unity Games": {
    short: "Unity",
    desc: "I get an idea and I want to see it done, so I do it in Unity. Simple stuff I make with or for friends.",
    tech: ["Unity", "C#", "Application"],
    thumbnail: iconunity,
    links: {
      "Boll": "https://play.google.com/store/apps/details?id=com.renegades.boll&hl=en_US&gl=US",
      "Box Cutter": "https://play.unity.com/mg/other/webgl-build-1076"
    }
  }
}

export default function portfolio() {
  var divarray = [];
  for (const proj in projects) {
    if (Object.hasOwnProperty.call(projects, proj)) {
      const element = projects[proj];
      divarray.push(project(proj, element));
    }
  }
  return (
    <>
      <div className={s.bg}></div>
      <div style={{ position: "static", color: "whitesmoke", width: "100%", textAlign: "center", fontSize: ".6rem" }}>The Things of <a className={s.a} href="/Ryan_Piedrahita_Resume.pdf" target="_blank">Ryan Piedrahita</a> (some of them)</div>
      <ul className={s.mainul}>
        {divarray}
      </ul>
    </>
  )
}
function project(key, element) {
  var linkarray = [];
  var techarray = [];
  for (const keyh in element.links) {
    if (Object.hasOwnProperty.call(element.links, keyh)) {
      const link = element.links[keyh];
      linkarray.push(<li className={s.li} key={keyh}><a target="_blank" className={s.a} href={link}>{keyh}</a></li>)
    }
  }
  element.tech.forEach(tech => {
    techarray.push(<li className={s.li} key={tech}>{tech}</li>)
  });
  return (
    <>
      <hr style={{margin:0}}/>
      <li key={key} className={s.mainli}>
        <div id="text" style={{ color: "white", fontSize: ".6rem", width: "60%" }}>
          <ul className={s.ul} style={{color:"grey", height:".8rem", marginTop:"0rem"}}>{techarray}</ul>
          <h3 style={{marginTop:".1rem",marginBottom:0}}>{key + " "}</h3>
          <p style={{marginTop:".1rem"}}>{element.desc}</p>
          <ul className={s.ul} style={{marginBottom:".1rem"}}>{linkarray}</ul>
        </div>
        <div className={s.thumbnail} style={{flexShrink:"0", marginLeft:".4rem", borderRadius:".1rem", overflow:"hidden"}}>
          <Image src={element.thumbnail} fill={true} alt={element.short}></Image>
        </div>
      </li>
    </>
  )
}