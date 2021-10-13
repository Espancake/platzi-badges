import React from "react";

//Components
import Navbar from "./Navbar";

const Layout =(props)=>{
    return(
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;