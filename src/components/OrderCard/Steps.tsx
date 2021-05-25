import React from 'react'
import styled from 'styled-components'
import { getAllSteps } from '../../state/hooks'

export function Steps(): JSX.Element {
    const steps = getAllSteps()

    return (
        <StyledActions>
            <h3>TX ACTION</h3>
            <ol>
                {steps.map((action: any, index: number) => (
                    <StyledLi key={'key-' + index}>{action.text}</StyledLi>
                ))}
            </ol>
        </StyledActions>
    )
}

const StyledActions = styled.section`
    h3 {
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 500;
    }
`

const StyledLi = styled.li`
    font-family: 'Roboto';
    margin: 16px 0;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.text2};
`
