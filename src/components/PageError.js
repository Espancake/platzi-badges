//Dev Dependencies
import React from 'react';
//Styles
import './styles/PageError.css'



const PageError = (props)=>{
    return(
        <div className="PageError">
            ❌{props.error.message}😨
        </div>
    )
}

export default PageError;