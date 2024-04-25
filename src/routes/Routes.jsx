import { Outlet, createBrowserRouter } from "react-router-dom"
import { PageError } from "../pages/PageError"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Magasin } from "../pages/Magasin"
import { VeloRoute } from "../pages/VeloRoute"
import { Vtt } from "../pages/Vtt"
import { Electrique } from "../pages/Electrique"
import { Occasion } from "../pages/Occasion"

export const Router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageError />,
    children : [
      {
        path: 'magasin',
        element: <Magasin />,
      },
      {
        path: 'route',
        element: <VeloRoute/>
      },
      {
        path: 'vtt',
        element: <Vtt />
      },
      {
        path: 'electrique',
        element: <Electrique />
      }, 
      {
        path: 'occasion',
        element: <Occasion />
      }
    ]
  }
])

function Home() {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer /> 
    </div>
  )
}