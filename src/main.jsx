import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createUsers from "./features/Users.js"
const store = configureStore({
   reducer:{
      user:createUsers
   }
})

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store = {store}>
       <App />
   </Provider>
)
