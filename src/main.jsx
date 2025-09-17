import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { ProductsDetailsProvider } from './context/ProductDetailsContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { PaginationProvider } from './context/PaginationContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
  <AuthProvider>       {/* AuthProvider goes first */}
    <ProductsProvider>
      <ProductsDetailsProvider>
        <CartProvider>
          <PaginationProvider>
            <App />
          </PaginationProvider>
        </CartProvider>
      </ProductsDetailsProvider>
    </ProductsProvider>
  </AuthProvider>
</BrowserRouter>

  </StrictMode>,
)
