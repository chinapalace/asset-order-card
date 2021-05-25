import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { mock } from '../../utils/mockHTTP'
import { OrderType, AppState } from '../index'

const initialState = {
    data: {},
    status: 'idle',
    error: null,
    activeIndex: 0,
    inputs: [
        { type: 'position_size', label: 'POSITION SIZE', value: 0 },
        { type: 'limit_price', label: 'LIMIT PRICE', value: 0 },
        { type: 'deadline', label: 'DEADLINE', value: 0 },
        {
            type: 'collateralization_ratio',
            label: 'COLLATERALIZATION RATIO',
            value: 0,
        },
        { type: 'spot_change', label: 'SPOT CHANGE', value: 0 },
    ],
    outputs: [
        { type: 'liquidation_price', label: 'LIQUIDATION PRICE', value: 0 },
        { type: 'collateral', label: 'COLLATERAL', value: 0 },
    ],
    steps: [
        {
            text: 'Enable WETH Wrapper',
            icon: 'toggle',
        },
        {
            text: 'Approve collateral to Opyn contracts',
            icon: 'toggle',
        },
        {
            text: 'Deposit collateral and mint oTokens',
            icon: 'check',
        },
        {
            text: 'Approve oToken to 0x trading contract',
            icon: 'toggle',
        },
        {
            text: 'Place Sell limit order',
            icon: 'check',
        },
    ],
} as OrderType

export const enableWETH = createAsyncThunk('LIMIT_SELL/enableWETH', async () => {
    const response = await mock(true, 1000)
    return response
})

export const approveCollateral = createAsyncThunk('LIMIT_SELL/approveCollateral', async () => {
    const response = await mock(true, 1000)
    return response
})

export const permitOTokenWrapper = createAsyncThunk('LIMIT_SELL/permitOtokenWrapper', async () => {
    const response = await mock(true, 1000)
    return response
})

export const permitDepositMintTrade = createAsyncThunk('LIMIT_SELL/permitDepositMintTrade', async () => {
    const response = await mock(true, 1000)
    return response
})

const slice = createSlice({
    name: 'LIMIT_SELL',
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
        builder.addCase(permitOTokenWrapper.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled'
            state.data = payload
            state.activeIndex = state.activeIndex + 1
        })
        builder.addCase(permitDepositMintTrade.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(permitDepositMintTrade.rejected, (state, action) => {
            state.status = 'rejected'
            if (action.payload) {
                state.error = action.payload.error
            }
        })
        builder.addCase(permitDepositMintTrade.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled'
            state.data = payload
            state.activeIndex = 0
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
        text: 'Approve collateral to Opyn Contracts',
        icon: 'toggle',
        buttonText: 'APPROVE COLLATERAL',
    },
    {
        asyncAction: permitOTokenWrapper(),
        text: 'Permit oToken to wrapper contracts',
        icon: 'toggle',
        buttonText: 'PERMIT OTOKEN',
    },
    {
        asyncAction: permitDepositMintTrade(),
        text: 'Permit, deposit, mint & trade',
        icon: 'check',
        buttonText: 'SUBMIT TRADE',
    },
]

export const getCurrentStep = (state: AppState) => {
    return steps[state.LIMIT_SELL.activeIndex]
}

export const getAllLimitSellFields = (state: AppState) => {
    return { inputs: state.LIMIT_SELL.inputs, outputs: state.LIMIT_SELL.outputs }
}

export const getAllSteps = (state: AppState) => state.LIMIT_SELL.steps
