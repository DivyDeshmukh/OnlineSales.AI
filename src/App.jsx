import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
