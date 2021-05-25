import React, { useMemo } from 'react'
import {
    DefaultTheme,
    ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle
} from 'styled-components'
import { Colors } from './styled'

export * from './components'

export function colors(darkMode: boolean): Colors {
    return {
        // base 
        white: '#FFFFFF',
        black: '#000000',

        // text
        text1: darkMode ? '#FFFFFF' : '#292535',
        text2: darkMode ? '#C3C5CB' : '#77757E',
        text3: darkMode ? '#2C2F36' : '#FFFFFF',

        // backgrounds / greys
        bg1: darkMode ? '#202231' : '#FFFFFF',
        bg2: darkMode ? 'rgb(22, 21, 34)' : '#F7F8FA',
        bg3: darkMode ? '#2a3a50' : '#EDEEF2',
        bg4: darkMode ? '#3a506f' : '#CED0D9',
        bg5: darkMode ? '#6C7284' : '#888D9B',

        // other
        red: '#EC7987',
        green: '#49D273',
        orange: '#CD6116',
        blue: '#4DADF3',
        lightgreen: '#B2F0C5',

        // spacing and border-radius
        borderRadius: '4px'
    }
}

export function theme(darkMode: boolean): DefaultTheme {
    return {
        ...colors(darkMode)
    }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const darkMode = false

    const themeObject = useMemo(() => theme(darkMode), [darkMode])

    return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}


