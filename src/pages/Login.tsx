import { AntdInput } from "../components/AntdInput"
import "./index.scss"
import { PasswordInput } from "../components/PasswordInput"
import { AntdButton } from "../components/AntdButton"
import { Link } from "react-router-dom"

const Login = () => {
    const handleLogin = (e : any) => {
        e.preventDefault()

    }
    return(
        <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            <AntdInput placeholder = "Enter your email" type = "email" />
            
            <PasswordInput placeholder = "Enter your password" />
            <p>
                Don't have an account?
                
                 <Link to = "/signup"> Signup</Link>
            </p>
            <AntdButton text = "Login Now" />
        </form>
    )
}

export default Login;