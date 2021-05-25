import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Web3ReactProvider } from '@web3-react/core'
import { Routes } from './Routes'
import store from './state'
import ThemeProvider from './theme'
import { getLibrary } from './utils/getLibrary'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <ThemeProvider>
                    <Router>
                        <Routes />
                    </Router>
                </ThemeProvider>
            </Provider>
        </Web3ReactProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
