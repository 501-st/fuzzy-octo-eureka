import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ContentWrapper, TableInfo} from "../Redux/constants"
import {setAuth, setError} from "../Redux/reducer";
import {Redirect} from "react-router-dom";

let Profile = () => {
    const userData = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    console.log("User data", userData);
    const isAuth = useSelector(state => state.user.isAuth)
    if (!isAuth) return <Redirect to="/"/>

    const logOut = () => {
        localStorage.removeItem("token")
        dispatch(setAuth(false));
        dispatch(setError(false, ""))
    }

    return (
        <ContentWrapper>
            <TableInfo>
                <p>Email: {userData.email}</p>
                <p>Full name: {userData.firstName + " " + userData.lastName}</p>
                <button onClick={logOut}> Log out</button>
            </TableInfo>
        </ContentWrapper>
    )
}

export default Profile;