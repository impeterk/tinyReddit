import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bulma/css/bulma.css'
import 'animate.css'
import 'bulma-pageloader'
import './styles/styles.css'
import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
