import React from 'react'
import styled from 'styled-components'

export function Summary({ collateral, currency }: {
    collateral: number
    currency: string
}) {
    return (
        <StyledSummary>
            <h4>TX SUMMARY</h4>
            <h4>Premium/oToken</h4>
            <label htmlFor="total">Est. Total Cost</label>
            <input type="number" id="total" value={100} readOnly />
            <label htmlFor="impact">Market Impact</label>
            <input type="number" id="impact" value={100} readOnly />
            <label htmlFor="fee">0x Protocol Fee</label>
            <input type="number" id="fee" value={100} readOnly />
            <label htmlFor="collateral">Collateral</label>
            <input type="number" id="collateral" value={collateral} readOnly />
        </StyledSummary>
    )
}

const StyledSummary = styled.section`
    background: rgba(220, 218, 233, .2);
    border-radius: 4px;
    display: flex;
    direction: column;
    display: flex;
    flex-flow: column;
    /* Stone */
    color: #77757E;
    padding: 8px 14px;

    input {
        padding: 0;
        margin: 4px 0 14px;

    &:read-only {
        color: #77757E;
        border: none;
        background: transparent;
        outline: none;
        padding: 0;
    }
}
`