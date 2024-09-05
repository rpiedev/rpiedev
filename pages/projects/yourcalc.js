import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Head from "next/head";
import React, {useState} from "react"
import { solve } from "../../components/calc";
import styles from "../../components/calc.module.css"

export default function Calculator({initialAns}) {
  const [ans, setAns] = useState(initialAns);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleInput(evt) {
      setInputValue(evt.target.value);
  }
  function handleButton(inp) {
      switch (inp) {
          case "clr":
              setInputValue("");
              break;
          default:
              setInputValue(inputValue+inp);
              break;
      }
  }
  function handleEnter(evt) {
      if (evt.code==="Enter") {
          handleSub();
      }
  }
  function handleSub() {
      var outp = solve(inputValue, ans); var comboVal;
      if (outp[0] === NaN || outp[0] === undefined || outp[1] != null) {
          comboVal = "Not a valid expression";
          setAns(comboVal);
      } else {
          comboVal = inputValue + " = " + outp[0];
          list.push(comboVal);
          setList(list);
          setAns(outp[0]);
      }
      
  }
  var divList = []; var i = 0;
  list.forEach(combo => {
      i++;
      divList.unshift(<div className={styles.combo} key={i}>{combo}</div>);
  });
  return (
    <section>
        <h3>This was a personal project I did during college -</h3>
        <p>
            - where I sort of just locked myself in my dorm for a weekend and didnt leave until I felt satisfied with 
            it. I had the idea of a calculator that could be customized and built to your own needs,
            hence "your calc". It didn't end up being that, I just became too busy with school to 
            continue obsessing and just left it as a project into tokenizing and parsing.
        </p>
        <p><a target="_blank" href='https://github.com/rrpie/yourcalc'>Github for this</a></p>
        <hr/>
      <div className={styles.mainbox}>
          <table className={styles.history}>
              <tbody>
                  <tr>
                      <td>
                          <div className={styles.previous}>
                          {divList}
                          </div>
                      </td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <td className={styles.solution}>{ans}</td>
                  </tr>
              </tfoot>
          </table>
          <table className={styles.calc}>
              <thead>
                  <tr>
                      <td className={styles.input} colSpan="6">
                          <input  autoFocus={true} onBlur={({target}) => target.focus()} onKeyPress={evt => handleEnter(evt)} type="text" className={styles.stuf} placeholder="Type your expression here." value={inputValue} onChange={evt => handleInput(evt)}></input>
                      </td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("+")}>+</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("1")}>1</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("2")}>2</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("3")}>3</button></td>
                      <td className={[styles.button, styles.equals].join(" ")}><button className={styles.inp} onClick={evt => handleButton("clr")}>clear</button></td>
                  </tr>
                  <tr>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("-")}>-</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("4")}>4</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("5")}>5</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("6")}>6</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("(")}>(</button></td>
                  </tr>
                  <tr>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("*")}>×</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("7")}>7</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("8")}>8</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("9")}>9</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton(")")}>)</button></td>
                  </tr>
                  <tr className={styles.options}>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("/")}>÷</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("p")}>π</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("0")}>0</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleButton("a")}>ans</button></td>
                      <td className={[styles.button, styles.number].join(" ")}><button className={styles.inp} onClick={evt => handleSub()}>=</button></td>
                  </tr>
                  <tr className={styles.options}>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("s")}>sin</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("c")}>cos</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("t")}>tan</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("e")}>EE</button></td>
                      <td className={styles.button}><button className={styles.inp} onClick={evt => handleButton("^")}>^</button></td>
                  </tr>
              </tbody>
          </table>
      </div>
    </section>  
  )
}

Calculator.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}