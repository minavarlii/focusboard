import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav
      style={{
        height: "60px",
        background: darkMode ? "#111827" : "#1f2937",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        fontSize: "18px",
        fontWeight: "bold"
      }}
    >
      <span>FocusBoard</span>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={toggleTheme}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {user && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar