
import { BrowserRouter, Router } from 'react-router-dom'
import './App.css'
import Home from './componnents/pages/home'

function App() {
  

  return (
    <>
      <BrowserRouter />
       {/* <Router> */}
      {/* <switch> */}
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/deals" component={Deals} />
        <Route path="/reservation" component={Reservation} /> */}
      {/* </switch> */}
    {/* </Router> */}
    <BrowserRouter />
      <Home />
    </>
  )
}

export default App
