import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home, Bill, Data} from './pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={ <Home/>}/>
            <Route exact path='/bill' element={ <Bill/>}/>
            <Route exact path='/data' element={ <Data/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
