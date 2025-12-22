import {useTheme} from "../hooks/useTheme";

function ThemeToggleButton() {

    const { setTheme } = useTheme()

    return (
        <div className="flex flex-col">
            <button onClick={() => setTheme('light')}>Light Theme</button>
            <button onClick={() => setTheme('dark')}>Dark Theme</button>
        </div>
    );
}

export default ThemeToggleButton;