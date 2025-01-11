import React from "react"
import HeroSection from "./hero-section"
import FeaturesSection from "./features-section"
import PeerMarketSection from "./peer-market-section"
import UserManagmentSection from "./user-managment-section"
import RoadmapSection from "./roadmap-section"
import NetworkSection from "./network-section"
import {logoFooter} from "@/assets"
import {FaArrowRightLong} from "react-icons/fa6"
import {Link} from "react-router"
import {Helmet} from "react-helmet-async"

export function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Amazen Trust</title>
        <meta
          name="description"
          content="Secure Trades, Smart Authentication Ultimate Trust"
        />
        <meta
          name="keywords"
          content="blockchain, cryptocurrency, profit, P2P, trade"
        />
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <PeerMarketSection />
      <UserManagmentSection />
      <NetworkSection />
      <RoadmapSection />
      <div className="relative z-50 flex flex-row flex-wrap items-center justify-center w-full p-4 overflow-auto bg-black lg:justify-start lg:p-0">
        <img
          src={logoFooter}
          alt="logo footer"
          className="select-none "
          draggable="false"
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <h2 className="text-4xl font-bold">Empower the Future with Us</h2>
          <p className="text-lg leading-relaxed">
            Be part of a platform redefining secure transactions,
            <br className="hidden lg:block" /> decentralized innovation, and
            global connections.
          </p>
          <Link
            to={"/"}
            className="relative flex flex-row items-center gap-x-5 px-6 py-2 text-sm font-bold text-[#4a2e0c] bg-gradient-to-r from-white to-[#f8f1e9] rounded-full shadow-[0_0_10px_rgba(255,154,85,0.6),0_0_40px_rgba(255,154,85,0.4)] hover:shadow-[0_0_20px_rgba(255,154,85,0.8),0_0_60px_rgba(255,154,85,0.6)] transition-all duration-300 ease-in-out group"
          >
            <span className="absolute top-0 right-0 rounded-full w-9 h-9 bg-gradient-to-r from-orange-600 to-orange-300 blur-lg"></span>
            <span className="absolute top-0 right-0 bg-white rounded-full opacity-30 w-9 h-9 blur"></span>
            <span>BUY AMZ NOW</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}
