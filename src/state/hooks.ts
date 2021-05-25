import { useCallback } from 'react'
import { OrderState, setOrderSide, OrderSide, OrderType } from './order'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from './index'
import {
    getCurrentStep as getMarketSellStep,
    getAllSteps as getAllMarketSellSteps,
    getAllMarketSellFields,
} from './MARKET_SELL'
import {
    getCurrentStep as getMarketBuyStep,
    getAllSteps as getAllMarketBuySteps,
    getAllMarketBuyFields,
} from './MARKET_BUY'
import {
    getCurrentStep as getLimitSellStep,
    getAllSteps as getAllLimitSellSteps,
    getAllLimitSellFields,
} from './LIMIT_SELL'
import {
    getCurrentStep as getLimitBuyStep,
    getAllSteps as getAllLimitBuySteps,
    getAllLimitBuyFields,
} from './LIMIT_BUY'

const currentStepByType = {
    MARKET_SELL: getMarketSellStep,
    MARKET_BUY: getMarketBuyStep,
    LIMIT_SELL: getLimitSellStep,
    LIMIT_BUY: getLimitBuyStep,
}

const allStepsByType = {
    MARKET_SELL: getAllMarketSellSteps,
    MARKET_BUY: getAllMarketBuySteps,
    LIMIT_SELL: getAllLimitSellSteps,
    LIMIT_BUY: getAllLimitBuySteps,
}

const allFieldsByType = {
    MARKET_SELL: getAllMarketSellFields,
    MARKET_BUY: getAllMarketBuyFields,
    LIMIT_SELL: getAllLimitSellFields,
    LIMIT_BUY: getAllLimitBuyFields,
}

export const selectOrderTypes = (state) => {
    const orderType = getOrderType()
    return currentStepByType[orderType](state)
}

export function getOrderStatus(state): any {
    const orderType = getOrderType()
    const { status, error } = state[orderType]
    return { status, error }
}

export function useOrderState(): OrderState {
    return useSelector<OrderState, OrderState>((state) => state.order)
}

export function useOrderSide(): OrderSide {
    return useSelector((state: OrderState) => state.order.orderSide)
}

export function getOrderType(): string {
    return useSelector((state: OrderState) => {
        return `${state.order.priceType}_${state.order.orderSide}`
    })
}

export function getFields(): OrderType {
    const orderType = getOrderType()
    return useSelector((state: OrderState) => {
        return allFieldsByType[orderType](state)
    })
}

export function getAllSteps(): OrderType {
    const orderType = getOrderType()
    return useSelector((state: OrderState) => {
        return allStepsByType[orderType](state)
    })
}

export function useOrderActionHandlers(): {
    onOrderSideSelection: (orderSide: OrderSide) => void
} {
    const dispatch = useDispatch<AppDispatch>()

    const onOrderSideSelection = useCallback(
        (orderSide: OrderSide) => {
            dispatch(setOrderSide({ orderSide }))
        },
        [dispatch]
    )

    return {
        onOrderSideSelection,
    }
}
