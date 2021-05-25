import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { mock } from '../../utils/mockHTTP'
import { OrderType, AppState } from '../index'

const initialState = {
    data: {},
    status: 'idle',
    error: null,
    activeIndex: 0,
    inputs: [{ type: 'position_size', label: 'POSITION SIZE', value: 0 }],
    outputs: [],
    steps: [
        {
            text: 'Enable WETH Wrapper',
            icon: 'toggle',
        },
        {
            text: 'Sign USDC to Wrapper Contract',
            icon: 'toggle',
        },
        {
            text: 'Sign USDC to Wrapper Contract',
            icon: 'toggle',
        },
    ],
} as OrderType

export const enableWETH = createAsyncThunk('MARKET_BUY/enableWETH', async () => {
    const response = await mock(true, 1000)
    return response
})

export const approveCollateral = createAsyncThunk('MARKET_BUY/approveCollateral', async () => {
    const response = await mock(true, 1000)
    return response
})

export const permitOTokenWrapper = createAsyncThunk('MARKET_BUY/permitOtokenWrapper', async () => {
    const response = await mock(true, 1000)
    return response
})

const slice = createSlice({
    name: 'MARKET_BUY',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(enableWETH.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(enableWETH.rejected, (state, action) => {
            state.status = 'rejected'
            if (action.payload) {
                state.error = action.payload.error
            }
        })
        builder.addCase(enableWETH.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled'
            state.data = payload
            state.activeIndex = state.activeIndex + 1
        })
        builder.addCase(approveCollateral.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(approveCollateral.rejected, (state, action) => {
            state.status = 'rejected'
            if (action.payload) {
                state.error = action.payload.error
            }
        })
        builder.addCase(approveCollateral.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled'
            state.data = payload
            state.activeIndex = state.activeIndex + 1
        })
        builder.addCase(permitOTokenWrapper.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(permitOTokenWrapper.rejected, (state, action) => {
            state.status = 'rejected'
            if (action.payload) {
                state.error = action.payload.error
            }
        })
    },
})

export default slice.reducer

const steps = [
    {
        asyncAction: enableWETH(),
        text: 'Enable WETH Wrapper',
        icon: 'toggle',
        buttonText: 'ENABLE WETH WRAPPER',
    },
    {
        asyncAction: approveCollateral(),
        text: 'Sign USDC to Wrapper Contract',
        icon: 'toggle',
        buttonText: 'SIGN USDC TO WRAPPER',
    },
    {
        asyncAction: permitOTokenWrapper(),
        text: 'Permit & Buy oToken',
        icon: 'toggle',
        buttonText: 'PERMIT OTOKEN',
    },
]

export const getCurrentStep = (state: AppState) => {
    return steps[state.MARKET_BUY.activeIndex]
}

export const getAllMarketBuyFields = (state: AppState) => {
    return { inputs: state.MARKET_BUY.inputs, outputs: state.MARKET_BUY.outputs }
}

export const getAllSteps = (state: AppState) => state.MARKET_BUY.steps
