import React, { useEffect } from 'react'
import { setOrderSide, OrderSide, setPriceType, PriceType } from '../state/order'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state'
import { useLocation } from 'react-router-dom'

export const usePathnameAsState = (): void => {
    const dispatch = useDispatch<AppDispatch>()
    const { pathname } = useLocation()
    return useEffect(() => {
        if (!pathname) return
        const paths = pathname.split('/')

        if (!paths?.[1]) return
        const urlOrderSide = paths?.[1].toUpperCase()
        if (urlOrderSide === 'BUY') {
            dispatch(setOrderSide({ orderSide: OrderSide.BUY }))
        } else if (urlOrderSide === 'SELL') {
            dispatch(setOrderSide({ orderSide: OrderSide.SELL }))
        }

        if (!paths?.[2]) return
        const urlPriceType = paths?.[2].toUpperCase()
        if (urlPriceType === 'MARKET') {
            dispatch(setPriceType({ priceType: PriceType.MARKET }))
        } else if (urlPriceType === 'LIMIT') {
            dispatch(setPriceType({ priceType: PriceType.LIMIT }))
        }
    }, [dispatch, pathname])
}
