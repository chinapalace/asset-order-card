import styled from 'styled-components'
import { darken } from 'polished'

export const ButtonText = styled.button`
    outline: none;
    border: none;
    font-size: inherit;
    padding: 0;
    margin: 0;
    background: none;
    cursor: pointer;

    :hover {
        opacity: 0.7;
    }

    :focus {
        text-decoration: underline;
    }
`

export const Button = styled.button.attrs<{ warning: boolean }, { backgroundColor: string }>(({ warning, theme }) => ({
    backgroundColor: warning ? theme.red : theme.green,
}))`
    padding: 1rem 2rem 1rem 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ theme }) => theme.white};
    width: 100%;

    :hover,
    :focus {
        background-color: ${({ backgroundColor }) => darken(0.05, backgroundColor)};
    }

    :active {
        background-color: ${({ backgroundColor }) => darken(0.1, backgroundColor)};
    }

    :disabled {
        background-color: ${({ theme }) => theme.bg1};
        cursor: auto;
    }
`

export const Header = styled.h1.attrs<{ warning: boolean }, { backgroundColor: string }>(({ warning, theme }) => ({
    backgroundColor: warning ? theme.red : theme.white,
}))`
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-top: 0;
    ${({ theme }) => theme.text1}
`
