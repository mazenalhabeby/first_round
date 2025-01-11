import {createRoot} from "react-dom/client"
import "./index.css"
import {RouterProvider} from "react-router"
import {ThemeProvider} from "@/components/theme-provider"
import {router} from "./router"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
)