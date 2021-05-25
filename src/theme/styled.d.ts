import 'styled-components'

export type Color = string
export interface Colors {
    // base 
    white: Color
    black: Color
    
    // text
    text1: Color
    text2: Color
    text3: Color

    // backgrounds / greys
    bg1: Color
    bg2: Color
    bg3: Color
    bg4: Color
    bg5: Color

    // other
    red: Color
    green: Color
    orange: Color
    blue: Color
    lightgreen: Color

    borderRadius: string
}


declare module 'styled-components' {
    export interface DefaultTheme extends Colors {

    }
}
