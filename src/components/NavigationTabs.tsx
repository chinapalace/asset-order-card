
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { OrderSide, PriceType } from '../state/actions'
import { darken } from 'polished'

export function BuySellTabs({ active, priceType }: { active: OrderSide, priceType: PriceType }) {

    return (
        <Tabs className="buttons">
            <StyledNavLink to={`/BUY/${priceType}`} isActive={() => active == 'BUY'} className="buy">
                {'BUY'}
            </StyledNavLink>
            <StyledNavLink to={`/SELL/${priceType}`} isActive={() => active == 'SELL'} className="sell">
                {'SELL'}
            </StyledNavLink>
        </Tabs>
    )
}

export function MarketLimitTabs({ active, orderSide }: { active: PriceType, orderSide: OrderSide }) {

    return (
        <Tabs>
            <StyledNavLink to={`/${orderSide}/MARKET`} isActive={() => active == 'MARKET'} className="market">
                {'MARKET'}
            </StyledNavLink>
            <StyledNavLink to={`/${orderSide}/LIMIT`} isActive={() => active == 'LIMIT'} className="limit">
                {'LIMIT'}
            </StyledNavLink>
        </Tabs>
    )
}

const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        border-radius:  ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.text1};
        flex: 1;
        border: 1px solid white;
    }

    &.buttons {
        margin-bottom: 12px;
        a {
        flex: .46;
        }
    }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
    activeClassName,
    backgroundColor: 'white'
})`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    transition: all .2s ease-in;

    :hover,
    :focus {
        background-color: ${({ backgroundColor }) => darken(0.05, backgroundColor)};
    }

    :active {
        background-color: ${({ backgroundColor }) => darken(0.1, backgroundColor)};
    }

    :disabled {
        background-color: ${({ theme }) => theme.bg1};
        color: ${({ theme }) => theme.text4};
        cursor: auto;
    }

    &.buy {
        color: ${({ theme }) => theme.green};
        border: ${({ theme }) => `1px solid ${theme.green}`};
        border-radius:  ${({ theme }) => theme.borderRadius};
        &.${activeClassName} {
            background-color: ${({ theme }) => theme.lightgreen};
            border: ${({ theme }) => `1px solid ${theme.lightgreen}`};
        }
    }

    &.sell {
        color: ${({ theme }) => theme.red};
        border: ${({ theme }) => `1px solid ${theme.red}`};
        border-radius:  ${({ theme }) => theme.borderRadius};
        &.${activeClassName} {
            background-color: ${({ theme }) => theme.red};
            border: ${({ theme }) => `1px solid ${theme.red}`};
            color: ${({ theme }) => theme.white};
        }
    }

    &.market {
        border-bottom-left-radius:0;
        border-bottom-right-radius:0;
        border-top-right-radius: 0;
        margin-top: 16px;
        &.${activeClassName} {
            background-color: ${({ theme }) => theme.bg3};
            border: ${({ theme }) => `1px solid ${theme.bg3}`};
            border-right: ${({ theme }) => `1px solid ${theme.bg4}`};
            border-bottom: ${({ theme }) => `1px solid ${theme.bg4}`};
        }
    }

    &.limit {
        border-bottom-left-radius:0;
        border-bottom-right-radius:0;
        border-top-left-radius: 0;
        border-top-right-radius: ${({ theme }) => theme.borderRadius};
        margin-top: 16px;
           &.${activeClassName} {
            background-color: ${({ theme }) => theme.bg3};
            border: ${({ theme }) => `1px solid ${theme.bg3}`};
            border-left: ${({ theme }) => `1px solid ${theme.bg4}`};
            border-bottom: ${({ theme }) => `1px solid ${theme.bg4}`};
        }
    }
}
`