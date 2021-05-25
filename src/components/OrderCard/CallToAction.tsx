import React from 'react'
import styled from 'styled-components'
import { Button } from '../../theme'
import Loader from 'react-loader-spinner'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state'
import { selectOrderTypes, getOrderStatus } from '../../state/hooks'

export function CallToAction({
    connect,
    active,
}: {
    connect: () => void
    active: boolean
}) {
    const dispatch = useDispatch()
    const orderType = useSelector((state) => selectOrderTypes(state))
    const { status, error } = useSelector((state) => getOrderStatus(state))

    const handleClick = async () => {
        try {
            await dispatch<AppDispatch>(orderType.asyncAction)
            console.log('success', `Fetched`)
        } catch (err) {
            console.log('error', `Fetch failed`)
        }
    }

    function getCTAButton() {
        if (!active) {
            return (
                <Button warning={true} onClick={connect}>
                    Connect to Metamask
                </Button>
            )
        } else {
            return (
                <Button onClick={handleClick}>
                    {status === 'pending' ? (
                        <Loader
                            type="ThreeDots"
                            color="white"
                            height={10}
                            width={40}
                        />
                    ) : (
                        `${orderType.buttonText}`
                    )}
                </Button>
            )
        }
    }

    return <StyledCTA>{getCTAButton()}</StyledCTA>
}

const StyledCTA = styled.section`
    background-color: ${({ theme }) => theme.bg1};
    color: ${({ theme }) => theme.white};
    width: 100%;
    box-shadow: 0px -4px 10px rgba(222, 222, 222, 0.5);
    padding: 16px;
    position: sticky;
    bottom: 0;
`
