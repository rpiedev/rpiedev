import s from "./timeline.module.css"
export default function Timeline() {
    return (
        <>
        <div className={s.bg}>
            <ul className={s.ul}>
                <li className={s.li}>
                    <div className={s.ct}>
                        <time className={s.ti}>June</time>
                        <p>Sat on my ass all day</p>
                    </div>
                </li>
                <li className={s.li}>
                    <div className={s.ct}>
                        <time className={s.ti}>July</time>
                        <p>Got up to some funny business</p>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}