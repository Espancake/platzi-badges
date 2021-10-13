import React from 'react';

//Styles
import './styles/PageLoading.css'
//Components
import Loader from '../components/Loader'

const PageLoading =()=>{
    return <div className="PageLoading">
        <Loader/>
    </div>
}

export default PageLoading;