import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeProvider'
import { store } from './store/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

