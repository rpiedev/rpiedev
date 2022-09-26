import React, {useEffect, useRef, useState} from "react";
import SimplexNoise from 'simplex-noise';
import styles from "./island.module.css"

function Screen(props) {
    const [resc, resChange] = useState(200);
    const [seedc, seedChange] = useState(Math.random());
    const [choo, chooChange] = useState(1);
    const [sens, sensChange] = useState(.6);
    const [zoom, zoomChange] = useState(5);
    const [soup, refresh] = useState(0);

    const canvasRef = useRef(null);
    //greyscale noise grid
    function noisegrey(context, canvas) {
        const simplex = new SimplexNoise(seedc);
        const xamo = canvas.width/resc; const yamo = canvas.height/resc;
        for(let x=0;x<resc;x++) {
            for(let y=0;y<resc;y++) {
                var r = simplex.noise2D(x/(zoom*5), y/(zoom*5))*sens*.6
                switch(Math.floor(r*10)) {
                    case (5):
                        r="255,255,255";
                        break;
                    case (4):
                        r="155,255,195";
                        break;
                    case (3):
                        r="100,255,100";
                        break;
                    case (2):
                        r="0,255,0";
                        break;
                    case (1):
                        r="75,255,0";
                        break;
                    case (0):
                        r="255,255,175";
                        break;
                    default:
                        r="0,0,255"
                        break;
                }
                context.fillStyle = "rgba("+r+",255)";
                context.fillRect(x*xamo,y*yamo,xamo,yamo);
            }
        }
    }
    function noiseimg(context, canvas) {
        const simplex = new SimplexNoise(seedc);
        var imgData=context.getImageData(0,0,canvas.width,canvas.height);
        var data = imgData.data; var res = canvas.height;
        for(var x=0;x<res;x++) {
            for(var y=0;y<res;y++) {
                var r = simplex.noise2D(x/(zoom*5), y/(zoom*5))*sens;
                data[(x + y * res) * 4 + 0] = 255;
                data[(x + y * res) * 4 + 1] = 255;
                data[(x + y * res) * 4 + 2] = 255;
                data[(x + y * res) * 4 + 3] = r*255;
            }
        }
        context.putImageData(imgData, 0, 0);
    }
    //update render when button is pressed or sensitivty is changed
    useEffect(()=> {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        switch(choo) {
            case 1:
                canvas.height = resc;
                canvas.width = resc;
                noiseimg(context, canvas);
                break
            default:
                canvas.height = canvas.width;
                noisegrey(context, canvas);
                break
        }
    }, [soup, sens, zoom])
    return (
        <>
            <div>
                <label className={styles.inp} htmlFor="noise">Islands</label><input className={styles.inp} name="choose" type="radio" id="noise" onChange={(x)=>{if(x.target.value==="on")chooChange(0);}}/>
                <input className={styles.inp} name="choose" type="radio" id="perlin" onChange={(x)=>{if(x.target.value==="on")chooChange(1);}} defaultChecked/> <label className={styles.inp} htmlFor="perlin">Simplex</label>
            </div>
            <div>
                <label className={styles.inp} htmlFor="zoom">Zoom</label><input className={styles.inp} type="range" min="1" max="30" step="1" id="zoom" value={zoom} onChange={(x)=>{zoomChange(x.target.value)}}/> 
                <input className={styles.inp} type="range" min="0.1" max=".9" step=".1" id="sens" value={sens} onChange={(x)=>{sensChange(x.target.value)}}/> <label className={styles.inp} htmlFor="sens">sens</label>
            </div>
            <div>
                Seed<input className={styles.inp} type="number" value={seedc} onChange={(x)=>{seedChange(x.target.value)}}/>
                <input className={styles.inp} type="number" value={resc} onChange={(x)=>{resChange(x.target.value)}}/>Resolution
            </div>
            <div>
                <button className={styles.inp} onClick={()=>{seedChange(Math.random);refresh(soup+1)}}>Random Seed</button>
                <button className={styles.inp} onClick={()=>refresh(soup+1)}>Update Grid</button>
            </div>
            <canvas ref={canvasRef} {...props}></canvas>
        </>
    )
}

export default Screen