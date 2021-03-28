import React from "react"
import NavigationContainer from "./Navigation/navigationContainer";
import Navigation from "./Navigation/navigation";

function Header(props) {
    return (
        <Navigation store={props.store}/>
    )
}

export default Header;