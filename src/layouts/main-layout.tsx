import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import React from "react"
import {Outlet} from "react-router"

export function MainLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>

      <Footer />
    </React.Fragment>
  )
}
