import s from "./../Main/main.module.css"
import pic1 from "./../Pictures/1pic.png"
import pic2 from "./../Pictures/2pic.jpeg"
import pic3 from "./../Pictures/3pic.png"
import pic4 from "./../Pictures/4pic.png"
import pic5 from "./../Pictures/pic5.jpg"
import pic6 from "./../Pictures/pic6.jpg"
import statisticsReducer from "./statistics-reducer";

const ADD_USER = "ADD-USER";
const UPDATE_TEXT_AREA = "UPDATE-TEXT-AREA"

let store = {
    _state : {
        statistics: {people: [{
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
        textareaData: " "},
        dashboard: [{
        src: pic1,
        className: `${s.first} ${s.common}`
    }, {
        src: pic2,
        className: `${s.second} ${s.common}`
    }, {
        src: pic3,
        className: `${s.third} ${s.common}`
    }, {
        src: pic4,
        className: `${s.fourth} ${s.common}`
    }, {
        src: pic1,
        className: `${s.fifth} ${s.common}`
    },]
    },
    _callSubscriber(){
        console.log("Hello, it's me")
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.statistics = statisticsReducer(this._state.statistics, action);
        /*this._state = statisticsReducer(this._state, action);*/
        this._callSubscriber(this._state);
    }
}
export const newUserActionCreator = () => {
    return {type: ADD_USER}
}

export const textareaChangedActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_AREA,
        newText: text
    }
}

window.store = store;

export default store;
