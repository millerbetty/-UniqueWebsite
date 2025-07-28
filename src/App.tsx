import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CreatePage from './pages/create'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/create'
            element={<CreatePage readOnly={false} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

