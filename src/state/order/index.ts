import { createReducer, createAction } from '@reduxjs/toolkit'

export interface OrderState {
    readonly orderSide: OrderSide
    readonly priceType: PriceType
}

export enum PriceType {
    MARKET = 'MARKET',
    LIMIT = 'LIMIT',
}

export enum OrderSide {
    BUY = 'BUY',
    SELL = 'SELL',
}

const initialState: OrderState = {
    orderSide: OrderSide.BUY,
    priceType: PriceType.MARKET,
}

export const setOrderSide = createAction<{ orderSide: OrderSide }>('order/setOrderSide')
export const setPriceType = createAction<{ priceType: PriceType }>('order/setPriceType')

export default createReducer<OrderState>(initialState, (builder) =>
    builder
        .addCase(setOrderSide, (state, { payload: { orderSide } }) => {
            state.orderSide = orderSide
        })
        .addCase(setPriceType, (state, { payload: { priceType } }) => {
            state.priceType = priceType
        })
)
