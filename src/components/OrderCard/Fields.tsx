import React from 'react'
import styled from 'styled-components'
import { getFields } from '../../state/hooks'

export function Fields(): JSX.Element {
    const { inputs, outputs } = getFields()

    return (
        <StyledFields>
            <StyledInputs>
                {inputs.map((field: any, index: number) => (
                    <li key={'key-' + index}>
                        <label>{field.label}</label>
                        <input />
                    </li>
                ))}
            </StyledInputs>
            <StyledOutputs>
                {outputs.map((field: any, index: number) => (
                    <li key={'key-' + index}>
                        <label>{field.label}</label>
                        <input />
                    </li>
                ))}
            </StyledOutputs>
        </StyledFields>
    )
}

const StyledFields = styled.section`
    color: ${({ theme }) => theme.text2};
`
const StyledInputs = styled.ul`
    padding: 0;
    list-style-type: none;
    color: ${({ theme }) => theme.text2};

    input {
        width: 184px;
        height: 40px;
        display: block;

        /* Stone */
        background: ${({ theme }) => theme.bg1};
        opacity: 0.3;
        border-radius: 4px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        border: 1px solid #dcdae9;

        /* Dark Grey */
        color: #292535;
    }

    label {
        display: block;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin: 12px 0 5px;

        /* Dark Grey */
        color: #292535;
    }
`

const StyledOutputs = styled.ul`
    padding: 0;
    list-style-type: none;
    color: ${({ theme }) => theme.text2};

    input {
        width: 184px;
        height: 40px;
        display: block;

        /* Stone */
        background: #dcdae9;
        opacity: 0.3;
        border-radius: 4px;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        border: none;

        /* Dark Grey */
        color: #292535;
    }

    label {
        display: block;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin: 12px 0 5px;

        /* Dark Grey */
        color: #292535;
    }
`
