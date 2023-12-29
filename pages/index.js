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
    tech: ["JavaScript", "Node.js", "Webpacker", "Team Lead"],
    thumbnail: iconidoc,
    links: {
      "Sim": "https://redassser.github.io/ASM/"
    }
  },
  "Unity Games": {
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
      <div style={{position:"absolute", overflow:"hidden", zIndex:"-1", width:"100%", height:"100%", backgroundColor:"#14110f"}}></div>
      <ul style={{
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "2rem",
        minWidth: "40%", 
        maxWidth: "30rem",
        listStyle: "none",
        padding: "1rem"
      }}>
        {divarray}
      </ul>
    </>
  )
}
function project(key, element) {
  var linkarray = [];
  var techarray = [];
  for (const key in element.links) {
    if (Object.hasOwnProperty.call(element.links, key)) {
      const link = element.links[key];
      linkarray.push(<li className={s.li}><a target="_blank" className={s.a} href={link}>{key}</a></li>)
    }
  }
  element.tech.forEach(tech => {
    techarray.push(<li className={s.li}>{tech}</li>)
  });
  return (
    <>
      <hr/>
      <li style={{width:"100%", height:"5.5rem", display:"flex", justifyContent:"space-between", alignItems: "center"}}>
        <div id="text" style={{ color: "white", fontSize: ".6rem", width: "60%" }}>
        <ul className={s.ul} style={{color:"grey"}}>{techarray}</ul>
        <h3 style={{marginTop:".1rem"}}>{key + " "}</h3>
        <p>{element.desc}</p>
        <ul className={s.ul} height="1rem">{linkarray}</ul>
      </div>
      <div id="thumbnail" style={{height:"4.5rem", width:"8rem", float:"right", position:"relative"}} >
        <Image src={element.thumbnail} fill={true}></Image>
      </div>
      </li>
    </>
  )
}