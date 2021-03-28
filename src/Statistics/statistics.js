import React, {PureComponent, useEffect} from "react";
import "./statistics.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserToken} from "../State/statistics-reducer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import format from 'date-fns/format';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

function Statistics() {

    const people = useSelector(state => state.statistics.data.people);
    let events = useSelector(state => state.statistics.data.dataEvents);

    let getDayBack = (string) => {
        return string.substring(0,10);
    }

    let abc = events.map(item => getDayBack(item.start))
    let i = 0;
    events.forEach(function (el)
    {
        el.start = abc[i]
        i++;
    })

/*    let getTimeBack = (string) => {
        return string.substring(11,16);
    }

    let abc = events.map(item => getTimeBack(item.start))
    let i = 0;
    events.forEach(function (el)
    {
        el.start = abc[i]
        i++;
    })
    console.log(events);*/

    console.log(events);
    console.log(format(new Date(1616230800000), 'dd/MM/yy'));

    const rangeStart = "1616230800000";
    const rangeEnd = "1616835600000";
    const userId = "6058b3ca704d2f08601d1bc6";
    const eventName = "event_btn";
    console.log(events);

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getUserToken("super_dan", "qwe123", rangeStart, rangeEnd, userId, eventName));
    }, [dispatch])

    return (
            <LineChart
                width={500}
                height={300}
                data={events}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="start"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="result" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
/*        <table>
            <tbody>
            <tr>
                <th>Россия</th>
                <th>ФИО</th>
                <th>Был в сети в последний раз</th>
            </tr>
            {
                people.map((item) => (
                    <tr>
                        <td><NavLink to="./../Account/account.js"><img className="img" alt="no ava"
                                                                       src={item.src}/></NavLink>
                        </td>
                        <td><NavLink to="./../Account/account.js"> {item.name}</NavLink></td>
                        <td>{item.lastVisited}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>*/
    )
}

export default Statistics;