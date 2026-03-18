import { useContext } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { ThemeContext } from "../../context/ThemeContext"

const Layout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#111827" : "#f3f4f6",
        color: darkMode ? "white" : "black"
      }}
    >
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />

        <main style={{ padding: "20px", flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout