import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"
import {MainLayout} from "@/layouts"
import {Home, Privacy} from "@/pages"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>
    </>
  )
)
