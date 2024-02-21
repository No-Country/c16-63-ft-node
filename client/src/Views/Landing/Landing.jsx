
import AllCards from '../Cards';
import NavBar from '../../Components/NavBar/NavBar';
import Generator from '../../Generator/Generator';
import './Landing.css'

export default function Landing(){
    return(
        <div className="App">
            <NavBar />
            <AllCards />  
            <Generator/>   
        </div>
    )
}