import React from 'react'
import styled from 'styled-components'
import { BuySellTabs, MarketLimitTabs } from '../NavigationTabs'
import { Summary } from './Summary'
import { Fields } from './Fields'
import { Steps } from './Steps'
import { CallToAction } from './CallToAction'
import { Header } from '../../theme'
import { useOrderState } from '../../state/hooks'
import { useWeb3React } from '@web3-react/core'
import { injectedConnector } from '../../utils/getInjectedConnector'
import { Web3Provider } from '@ethersproject/providers'
import { usePathnameAsState } from '../../hooks/usePathnameAsState'

export function OrderCard({ currency, date }: { currency: string; date: Date }) {
    const { orderSide, priceType } = useOrderState()
    const { activate, active } = useWeb3React<Web3Provider>()
    // map url state to redux store
    usePathnameAsState()

    function handleConnect() {
        activate(injectedConnector)
    }

    return (
        <StyledOrderCard id="Opyn-OrderCard">
            <Container>
                <Header>Order Card</Header>
                <BoxShadowContainer>
                    <BuySellTabs priceType={priceType} active={orderSide}></BuySellTabs>
                    <b>{currency} </b>
                    <DateText>{date.toDateString()}</DateText>
                    <div>
                        <p>
                            To create a spread, select another option. <a>Learn more</a>
                        </p>
                    </div>
                </BoxShadowContainer>
                <MarketLimitTabs orderSide={orderSide} active={priceType} />
                <BoxShadowContainer style={{ marginTop: 0 }}>
                    <Fields />
                    <Steps />
                    <Summary collateral={10} currency={currency} />
                </BoxShadowContainer>
            </Container>

            <CallToAction connect={handleConnect} active={active} />
        </StyledOrderCard>
    )
}

//TODO: replace all colors with options from the theme
export const BoxShadowContainer = styled.div`
    box-shadow: 0px 4px 10px rgba(222, 222, 222, 0.5);
    border-radius: 4px;
    padding: 18px;
`

export const Container = styled.div`
    background: white;
    display: flex;
    direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    padding: 16px;
`

const StyledOrderCard = styled.aside`
    width: 100%;
    height: 100%;
    margin: auto;
    color: rgb(48, 57, 66);
    font-family: 'Avenir', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 248px;
`
const DateText = styled.span`
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
`
