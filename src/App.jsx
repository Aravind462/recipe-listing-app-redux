import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id/view" element={<View/>}/>
      </Routes>
    </>
  )
}

export default App
