import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './componnents/sections/nav_section/nav.jsx'
import Footer from './componnents/sections/footer_section/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
)
