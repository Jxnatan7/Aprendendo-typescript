import { useCallback, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin"

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null)
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const mailLength = useMemo(() => {
    return mail.length * 10
  }, [])

  const handleLogin = useCallback(() => {
    console.log(mail, password)

    if (inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus()
    }
  }, [mail, password])

  return (
    <div>
      <h1>Login in your account</h1>

      <p>Quantidade de caracteres no email: {mailLength * mailLength}</p>

      <form>
        <InputLogin
          label="mail"
          value={mail}
          onChange={(newValue) => setMail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="password"
          value={password}
          onChange={(newValue) => setPassword(newValue)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}
