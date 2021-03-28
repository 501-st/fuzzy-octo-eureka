import pic6 from "../Pictures/pic6.jpg"
import pic5 from "../Pictures/pic5.jpg";
import axios from "axios";



const ADD_USER = "ADD-USER";
const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA";
const SET_DATA_EVENTS = "SET-DATA-EVENTS"

axios.defaults.baseURL = 'https://api.tsu-examples.sabir.pro/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';


let initialState = {
    data: {
        people: [{
            name: "Рыбина Ульяна Александровна",
            lastVisited: "Вчера",
            src: pic6
        }, {
            name: "Козлов Максим Николаевич",
            lastVisited: "23.02.2020",
            src: pic5
        }, {
            name: "Тарасова Юлия Владимировна",
            lastVisited: "09.01.2021",
            src: pic6
        }, {
            name: "Костюк Тарас Иммануилович",
            lastVisited: "12.12.2012",
            src: pic5
        }, {
            name: "Заморский Василий Семенович",
            lastVisited: "06.04.2021",
            src: pic5
        }, {
            name: "Наумова Александра Андреевна",
            lastVisited: "10.10.2019",
            src: pic6
        }, {
            name: "Кузнецова Виктория Сергеевна",
            lastVisited: "17.08.2020",
            src: pic6
        }, {
            name: "Петрова Анастасия Константиновна",
            lastVisited: "23.04.2021",
            src: pic6
        }],
        textareaData: " ",
        dataEvents: []
    }
}

let statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            let newUser = {
                name: state.textareaData,
                src: pic6,
                lastVisited: "12.04.2019"
            }
            state.people.push(newUser)
            state.textareaData = " "
            return state
        case UPDATE_TEXT_AREA:
            state.textareaData = action.newText
            return state
        case SET_DATA_EVENTS:
            state.data.dataEvents = action.data;
            return state;
        default:
            return state
    }
}

const setDataEvents = (data) => ({
    type: SET_DATA_EVENTS,
    data: data
})

let token = null;

export const getUserToken = (login, password, rangeStart, rangeEnd, userId, eventName) => (
    (dispatch) =>{
        axios.post("/auth/login", {login, password}).then(
            response => {token = 'bearer ' + response.data.data.token;
            dispatch(getEvents(rangeStart, rangeEnd, userId, eventName));}
        )
    }
)


export const getEvents = (rangeStart, rangeEnd, userId, eventName) =>(
    (dispatch) =>{
        axios.get(`/event?eventName=${eventName}&userId=${userId}&` +
            `every=1h&agregation=count&range_start=${rangeStart}&range_end=${rangeEnd}`,
            {headers: { Authorization:token }}).then(
            response => {
                dispatch(setDataEvents(response.data.data))
            }
        )
    }
)

/*&range_start=1616425200000&range_end=1616518800000*/

export default statisticsReducer;