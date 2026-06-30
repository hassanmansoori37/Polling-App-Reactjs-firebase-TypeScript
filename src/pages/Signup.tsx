import { AntdInput } from "../components/AntdInput"
import "./index.scss"
import { PasswordInput } from "../components/PasswordInput"
import { AntdButton } from "../components/AntdButton"
import { Link , useNavigate } from "react-router-dom"
import { message } from "antd"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate()

    const [email , set_email] = useState("")
    const [password , set_password] = useState("")
    const [confirm_pass , set_confirm_pass] = useState("")

    const handleSignup = (e : any) => {
        e.preventDefault()

        if(!email){
            message.error("email is required")
            return
        }

        if(!password){
            message.error("password is required")
            return
        }

        if(password !== confirm_pass){
            message.error("passwords do not match")
            return

        }

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    message.success("Signup successfully")
    navigate("/")
    
    
  })
  .catch((error) => {
   console.error(error);
   message.error(error.message)
   
  });

    }
    return(
        <form onSubmit={handleSignup} className="login-form">
            <h2>Signup</h2>
            <AntdInput placeholder = "Enter your email" type = "email" 
            onChange = {(e : any) => {set_email(e.target.value)}}/>
            
            <PasswordInput placeholder = "Enter your password" 
            onChange = {(e : any) => {set_password(e.target.value)}}/>

            <PasswordInput placeholder = "Confirm your password" 
            onChange = {(e : any) => {set_confirm_pass(e.target.value)}}/>
            <p>
                Already have an account?
                
                 <Link to = "/login"> Login</Link>
            </p>
            <AntdButton text = "Signup Now" onClick = {handleSignup} />
        </form>
    )
}

export default Signup;