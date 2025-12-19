import ThemeToggleButton from "./components/ThemeToggleButton"

function App() {
  
  return (
    <div className="bg-background text-foreground  w-full h-screen flex flex-col justify-center items-center">
      <h1 >Hello, World!</h1>
      <h2 >How are you?</h2>
      <ThemeToggleButton />
    </div>
  )
}

export default App
