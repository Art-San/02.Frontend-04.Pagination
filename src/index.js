import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import App1 from './app/App1'
import 'bootstrap/dist/css/bootstrap.min.css'
// import CountersList from './0/CountersList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
        <App1 />
        {/* <CountersList /> */}
    </React.StrictMode>
)
