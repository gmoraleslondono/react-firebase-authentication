import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Layout/Main'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      }
    ]
  }
])

const App = () => {

  return (
    <RouterProvider router={Router} />
  )
}

export default App
