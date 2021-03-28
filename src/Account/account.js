import React from "react";
import s from "./account.module.css";

function Account() {

    return (
        <div>
            <div className={s.sidebar}>
                <ul>
                    <li className={s.sign}> ФИО</li>
                    <li className={s.sign}> Задания</li>
                    <li className={s.sign}> Статистика</li>
                    <li className={s.sign}> Настройки</li>
                    <li className={s.sign}> Выход</li>
                </ul>
            </div>
        </div>
    )
}

export default Account;