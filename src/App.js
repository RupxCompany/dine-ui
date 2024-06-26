import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import NotFoundPage from './components/NotFoundPage'
import Redirect from './components/Redirect'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Redirect to='https://rupx.in' />} />
        <Route exact path="/:qrCode" element={<Home />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  )
}

export default App
