import { RouterProvider } from "react-router-dom"
import { Router } from "./routes/Routes"

export const App = () => {
  return (
    <RouterProvider router={ Router} />
  )
}
