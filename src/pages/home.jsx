import {useNavigate} from 'react-router-dom';
import Display from './displayTransation';
import Add from './add';
function Home(){
    const history = useNavigate();
    const gotoLogin =()=>{
                // history.push('./login.jsx')
                history.push("./login.jsx")
    }
    return(
        <>
        <h1>Home</h1>
        <button onClick={gotoLogin}>Go to Login</button>
        <Display/>
        <Add/>
        
        </>
    )
}
export default Home;