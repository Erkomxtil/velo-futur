import { Outlet, createBrowserRouter } from "react-router-dom"
import { PageError } from "../pages/PageError"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Magasin } from "../pages/Magasin"
import { VeloRoute } from "../pages/VeloRoute"
import { Vtt } from "../pages/Vtt"
import { Electrique } from "../pages/Electrique"
import { Occasion } from "../pages/Occasion"
import { Legal } from "../pages/Legal"
import { Contact } from "../pages/Contact"
import { Accueil } from "../pages/Accueil"
import { NavMobile } from "../components/NavMobile"
import { useState } from "react"

export const Router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageError />,
    children : [
      {
        index: true,
        element: <Accueil />
      },
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
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'legal',
        element: <Legal/>
      }
    ]
  }
])

function Home() {
  const [nav, setNav] = useState(false) 

  return (
    <div className={nav ? 'h-[100vh] flex flex-col relative overflow-hidden':'h-[100vh] flex flex-col relative'}>
      <Header nav={nav} setNav={setNav}/>
      <div className="grow">
        <Outlet />
      </div>
      <Footer /> 
      <NavMobile setNav={setNav} nav={nav}/>
    </div>
  )
}