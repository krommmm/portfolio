import { createContext, useState } from 'react';

const themes = {
	dark: {
		backgroundColor: 'black',
		color: 'white',
	},
	light: {
		backgroundColor: 'rgb(255,255,255)',
		color: 'black',
	},
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
	const [isDark, setIsDark] = useState(false);

	function toggleTheme() {
		setIsDark(!isDark);
	}

	const theme = isDark ? themes.dark : themes.light;

    return (
        <>
           <ThemeContext.Provider value={[{theme,isDark},toggleTheme]}>
            {children}
           </ThemeContext.Provider>
        </>
    )
};


