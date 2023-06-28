import t from "../../components/timeline2.module.css"
export default function timeline() {
    return (
        <section className={t.ct}>
            <div className={t.ti}>
                <div className={t.tbg} style={{backgroundColor: "rgb(1, 1, 255);"}}>
                </div>
                <div className={t.ty} >
                    <p class="f2 heading--sanSerif">2011</p>
                </div>
                <div className={t.tc}>
                    <h1>Lorem ipsum dolor sit</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit.
                    </p>
                </div>
            </div>
            <div className={t.ti}>
                <div className={t.tbg} style={{backgroundColor: "rgb(1, 255, 1);"}}>
                </div>
                <div className={t.ty} >
                    <p class="f2 heading--sanSerif">2011</p>
                </div>
                <div className={t.tc}>
                    <h1>Lorem ipsum dolor sit</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit.
                    </p>
                </div>
            </div>
        </section>
    )
}