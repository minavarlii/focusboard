import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    const success = login(email, password)

    if (!success) {
      setError("Invalid email or password")
      setLoading(false)
      return
    }

    // simulate loading delay (optional)
    setTimeout(() => {
      navigate("/dashboard")
    }, 800)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "300px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              display: "block",
              marginTop: "5px",
              marginLeft: "65px",
              marginRight: "20px",
              width: "60%",
              padding: "10px 20px",
              background: loading ? "#9ca3af" : "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "20px",
              boxSizing: "border-box",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}

        <p style={{ marginTop: "10px" }}>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login



