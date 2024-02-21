
import gJeneraSON from "../../assets/gJeneraSon.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css'
export default function NavBar(){
    return(
        <>
            <div className="NavBar">            
                <div className="NameLogo">
                    <img src={gJeneraSON} className="GJ" alt="gJeneraSON"/>
                    <span className="eraSON">eraSON</span>
                </div>
                <div className="LogIn">                    
                    <AccountCircleIcon sx={{ fontSize: 45 }} color="secondary"/>
                </div>
            </div>
        </>
    )
}