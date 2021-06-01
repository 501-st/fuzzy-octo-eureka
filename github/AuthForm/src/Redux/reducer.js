import axios from "axios";
import {SET_AUTH, SET_ERROR, SET_USER_DATA} from "./constants";

axios.defaults.baseURL = ' https://api.englishpatient.org';
axios.defaults.headers.common['Content-Type'] = 'application/json';

let initialState = {
    user: {},
    isAuth: false,
    error: {
        isError: false,
        message: ""
    }
}

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, user: action.data}
        case SET_AUTH:
            return {...state, isAuth: action.isAuth}
        case SET_ERROR:
            return {...state, error: action}
        default:
            return state;
    }
};

export const setAuth = (status) => ({
    type: SET_AUTH,
    isAuth: status
})

const setUsersData = (data) => ({
    type: SET_USER_DATA,
    data: data
})

export const setError = (status, errorMessage) => ({
    type: SET_ERROR,
    isError: status,
    errorMessage: errorMessage
})

export const getUserToken = (email, password) => (
    (dispatch) => {
        axios.post("/login", {email, password}).then(
            response => {
                if(response.data.token
                    ? localStorage.setItem("token", response.data.token)
                    : dispatch(setError(true, response.data.error.message)))
                    console.log("")
                dispatch(getUser());
            }
        )
    }
)


export const getUser = () => (
    (dispatch) => {
        axios.get(`/me?token=${localStorage.getItem("token")}`).then(
            response => {
                const user = response.data.result.user
                dispatch(setUsersData({lastName: user.lastName,
                    firstName: user.firstName,
                    email: user.email}));
                dispatch(setAuth(true));
            }
        )
    }
)

export default userReducer;


