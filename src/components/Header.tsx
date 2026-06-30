import { AntdButton } from "./AntdButton";
import "./index.scss"

const Header = () => {
    const logout = () => {
        console.log("Logout running");
        
    }
    return(
        <div className="header">
            <h3>Polling App</h3>
            <div>
            <b>user@gmail.com</b>
            <AntdButton text = "Logout" onClick = {logout}/>
            </div>
        </div>
    )
    
}

export default Header;