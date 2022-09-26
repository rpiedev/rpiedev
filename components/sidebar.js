import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { data } from './data';
import styles from './sidebar.module.css'
import RYAN from "./RYAN.png"

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const toggle = index => {
    if (open===index) return setOpen(null);
    setOpen(index);
  }
  return (
    <span className={styles.maj}>
      <Image className={styles.img} src={RYAN} objectFit="contain"/>
      <nav className={styles.nav}>
        {data.map((item,index)=> {
          return(
            <>
              <button onClick={()=>toggle(index)} key={index} style={open===index ? {"background-color":"#c7c7c7"} : null} className={styles.accordion}>{item.key}</button>
              {item.notes.map((subitem, subindex)=> {
                return (<>{open===index ? <Link href={subitem.cligo} key={subindex} ><a>{subitem.sees}</a></Link> : null}</>)
              })}
            </>
          )
        })}
      </nav>
    </span>
  )
}
