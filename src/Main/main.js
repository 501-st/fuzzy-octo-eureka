import React from "react"
import s from "./main.module.css"

function Main(props) {
    return (
        <div className={s.grid}>

            {
                props.dashboard.map((item) => (
                    <div className={item.className}>
                        <img className={s.img} alt="Oops, it's gone"
                             src={item.src}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Main;
