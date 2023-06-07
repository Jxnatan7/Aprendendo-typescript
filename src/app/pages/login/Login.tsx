import { useState } from "react"
import { Link } from "react-router-dom"

export const Login = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log(mail, password)
    }
    
    return (
        <div>
           <h1>Login in your account</h1>
           <form>
                <label>
                    <span>mail</span>
                    <input type="text" value={mail} onChange={e => setMail(e.target.value)}/>
                </label>

                <label>
                    <span>password</span>
                    <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button
                    type="button"
                    onClick={handleLogin}
                    >
                    Login
                </button>
           </form>
        </div>
    )
}