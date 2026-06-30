import { AntdInput } from "../components/AntdInput"
import "./index.scss"
import { PasswordInput } from "../components/PasswordInput"
import { AntdButton } from "../components/AntdButton"
import { Link } from "react-router-dom"

const Signup = () => {
    const handleSignup = (e : any) => {
        e.preventDefault()

    }
    return(
        <form onSubmit={handleSignup} className="login-form">
            <h2>Signup</h2>
            <AntdInput placeholder = "Enter your email" type = "email" />
            
            <PasswordInput placeholder = "Enter your password" />
            <PasswordInput placeholder = "Confirm your password" />
            <p>
                Already have an account?
                
                 <Link to = "/login"> Login</Link>
            </p>
            <AntdButton text = "Signup Now" />
        </form>
    )
}

export default Signup;