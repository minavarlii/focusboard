import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

const Register = () => {
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/
    return regex.test(password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long. It must include at least one capital letter. It must include at least one small letter. It must include at least one symbol.")
      return
    }

    register(email, password)
    navigate("/dashboard")
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: "10px" }}
        />

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Register