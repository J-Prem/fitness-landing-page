import { useState, useEffect, createContext, useContext } from 'react'
import Home from './pages/Home'

export const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode')
        return saved ? JSON.parse(saved) : true
    })

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(prev => !prev)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
                <Home />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
