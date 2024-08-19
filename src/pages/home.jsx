import {useNavigate} from 'react-router-dom';
import Display from './displayTransation';
import React from 'react';
import Add from './add';
function Home(props){
    const history = useNavigate();
    
    return(
        <>
        <h1>Home</h1>
        <button onClick={()=>history("./displayTransation")}>Go to Login</button>
        {/* <Display/>
        <Add/> */}
        
        </>
    )
}
export default Home;