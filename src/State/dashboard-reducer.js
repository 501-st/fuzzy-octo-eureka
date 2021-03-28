import s from "./../Main/main.module.css"
import pic1 from "./../Pictures/1pic.png"
import pic2 from "./../Pictures/2pic.jpeg"
import pic3 from "./../Pictures/3pic.png"
import pic4 from "./../Pictures/4pic.png"

let initialState = [{
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

let dashboardReducer = (state = initialState, action) => {
    return state
}
export default dashboardReducer;