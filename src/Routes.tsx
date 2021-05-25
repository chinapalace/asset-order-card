import React from 'react'
import { Route } from 'react-router-dom'
import { OrderCard } from './components/OrderCard'

export function Routes(): JSX.Element {
    return (
        <Route path="*">
            <OrderCard currency={'WETH'} date={new Date()} />
        </Route>
    )
}
