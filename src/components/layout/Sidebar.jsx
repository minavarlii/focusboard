import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Sidebar = () => {
  const { darkMode } = useContext(ThemeContext)

  const linkStyle = {
    display: "block",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
  }

  const activeStyle = {
    backgroundColor: darkMode ? "#374151" : "#1f2937"
  }

  return (
    <div
      style={{
        width: "200px",
        background: darkMode ? "#1f2937" : "#374151",
        color: "white",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h3>Menu</h3>

      <NavLink
        to="/dashboard"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/tasks"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Tasks
      </NavLink>

      <NavLink
        to="/notes"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Notes
      </NavLink>
    </div>
  )
}

export default Sidebar