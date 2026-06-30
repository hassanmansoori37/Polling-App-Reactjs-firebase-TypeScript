import { AntdInput } from "../components/AntdInput"
import "./index.scss"
import { PasswordInput } from "../components/PasswordInput"
import { AntdButton } from "../components/AntdButton"
import { Link , useNavigate } from "react-router-dom"
import { useState } from "react"
import { message } from "antd"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate()

     const [email , set_email] = useState("")
     const [password , set_password] = useState("")

    const handleLogin = (e : any) => {
        e.preventDefault()

        if(!email) {
            message.error("email is required")
            return
        }

        if(!password){
            message.error("password is required")
        }

        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    message.success("Login successfully")
    navigate("/")
    
  })
  .catch((error) => {
    console.error(error);
    message.error(error.message)
    
  });

    }
    return(
        <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            <AntdInput placeholder = "Enter your email" type = "email"
             onChange = {(e : any) => {set_email(e.target.value)}} />
            
            <PasswordInput placeholder = "Enter your password"
            onChange = {(e : any) => {set_password(e.target.value)}} />
            <p>
                Don't have an account?
                
                 <Link to = "/signup"> Signup</Link>
            </p>
            <AntdButton text = "Login Now" onClick = {handleLogin} />
        </form>
    )
}

export default Login;