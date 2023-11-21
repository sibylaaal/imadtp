import { useState } from 'react'

import 'tailwindcss/tailwind.css';
import { RouterProvider } from 'react-router-dom'
import {routerI} from './router/index'

function App() {

  return (
  <>
  <RouterProvider router={routerI} />
  </>
  )
}

export default App
