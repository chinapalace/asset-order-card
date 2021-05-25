import { configureStore } from '@reduxjs/toolkit'
import order from './order'
import MARKET_SELL from './MARKET_SELL'
import MARKET_BUY from './MARKET_BUY'
import LIMIT_SELL from './LIMIT_SELL'
import LIMIT_BUY from './LIMIT_BUY'

const store = configureStore({
    reducer: {
        order,
        LIMIT_SELL,
        LIMIT_BUY,
        MARKET_SELL,
        MARKET_BUY,
    },
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//TODO: add types for inputs, outputs, steps
export interface OrderType {
    data: {}
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
    error: string | null
    activeIndex: number
    inputs: []
    outputs: []
    steps: []
}
