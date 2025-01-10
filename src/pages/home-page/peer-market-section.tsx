import {ContainerScroll} from "@/components/ui/container-scroll-animation"
import {peerMarkets} from "@/assets"
import React from "react"
import {lowFee, fast, safe, userStar, robot, global} from "@/assets"

type PeerMarketFeaturesType = {
  title: string
  description: string
  icon: string
}

const peerMarketFeatures: PeerMarketFeaturesType[] = [
  {
    title: "Low Fees",
    description:
      "Enjoy industry-low transaction fees with exclusive discounts when using our native token.",
    icon: lowFee,
  },
  {
    title: "Instant Transactions",
    description:
      "Enjoy near-instant fund transfers powered by our cutting-edge blockchain technology.",
    icon: fast,
  },
  {
    title: "Secure Escrow System",
    description:
      "Funds are held securely until both parties confirm the transaction.",
    icon: safe,
  },
  {
    title: "Trust Scores",
    description:
      "Build trust with peer ratings and reviews based on transaction history.",
    icon: userStar,
  },
  {
    title: "Dispute Resolution",
    description:
      "AI-powered and manual dispute resolution for a hassle-free experience.",
    icon: robot,
  },
  {
    title: "Flexible Offer Listing and Payment Integration",
    description:
      "List your offer in the market, sell anywhere, and use the platform as a secure payment system for online businesses and stores.",
    icon: global,
  },
]

const PeerMarketSection = () => {
  return (
    <div id="peer-market" className="flex flex-col mb-8 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <React.Fragment>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Secure, Instant and Affordably
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Peer-to-Peer Market
              </span>
            </h1>
          </React.Fragment>
        }
      >
        <img
          src={peerMarkets}
          alt="peer markets"
          height={720}
          width={1400}
          className="object-cover object-left-top h-full mx-auto rounded-2xl"
          draggable={false}
        />
      </ContainerScroll>
      <div className="flex flex-row flex-wrap items-center justify-around max-w-6xl mx-auto">
        {peerMarketFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start max-w-[20rem] gap-10 min-h-72"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-12 select-none"
              draggable="false"
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                {feature.title}
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PeerMarketSection
