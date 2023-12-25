import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import '@fontsource/roboto/300.css';
import { AppTheme } from './theme/AppTheme.jsx';
import { VehiclesApp } from './vehicles/VehiclesApp.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <Provider store={store}>
        <VehiclesApp />
      </Provider>
    </AppTheme>
  </React.StrictMode>,
)
