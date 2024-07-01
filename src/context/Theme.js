import { createContext, useState} from "react";


const themes = {
	none : {display:"none"},
	flex: {display:"flex"},
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = ()=>{
        setIsDark(!isDark);
    };

	const theme = isDark ? themes.none : themes.flex;

    return (
        <>
        <ThemeContext.Provider value={[{theme,isDark},toggleTheme]}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}