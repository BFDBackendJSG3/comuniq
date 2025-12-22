import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router"
import Home from "./pages/home"
import { ThemeProvider } from "./components/ThemeProvider"
import Login from "./pages/Login"

function App() {
  
  return (
    <ThemeProvider storageKey="vite-ui-theme" defaultTheme="dark">
      <div className="min-h-screen pt-20">
        <Navbar/>
        <div className="px-5 py-2 container mx-auto">
          <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/login" element={<Login/> }/>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
