import {
  featureImages,
  orangeGlowing,
  blueGlowing,
  walletIcon,
  saveIcon,
  peerIcon,
  bgBoxes,
} from "@/assets"

import {WorldMap} from "@/components/ui/world-map"

import React from "react"

const featureData = [
  {
    title: "Your Crypto, Secure.",
    description:
      "Experience a powerful wallet with multi-layer security, seamless payments.",
    icon: saveIcon,
    onlyMobile: true,
    glowingImage: blueGlowing,
    boxStyle: "col-span-2 h-[17rem] w-[17rem] p-4 relative",
    pragraphStyle: "absolute -left-5 z-40",
    mobileIconStyle: "absolute bottom-0 right-0 p-5",
    mobileGlowingImageStyle: "absolute -left-[8rem] -bottom-[8rem] opacity-60 ",
  },
  {
    title: "Simplify Management.",
    description: "Seamless user management, and SDK integration.",
    icon: walletIcon,
    iconStyle: "absolute -top-2 -right-20 opacity-60 w-[80%]",
    glowingImage: orangeGlowing,
    glowingImageStyle: "absolute bottom-0 left-0 p-5 w-[60%]",
    boxStyle:
      "col-span-1 bg-black rounded-[2rem] h-[17rem] w-[17rem] relative overflow-hidden p-4",
    mobileIconStyle: "absolute bottom-0 left-0 p-5 w-[58%]",
    mobileGlowingImageStyle: "absolute -top-2 -right-20 opacity-60 w-[80%]",
  },
  {
    title: "P2P Market.",
    description:
      "Experience seamless peer-to-peer transactions with low fees, AI-powered security.",
    icon: peerIcon,
    onlyMobile: true,
    glowingImage: blueGlowing,
    boxStyle: "col-span-1 rounded-[2rem] h-[17rem] w-[17rem] p-4 z-40",
    mobileIconStyle: "absolute bottom-0 left-0 p-5 w-[60%]",
    mobileGlowingImageStyle: "absolute -top-[8rem] -right-[8rem] opacity-60",
  },
  {
    title: "Redefining Data with Decentralization.",
    description:
      "Join the future of secure, scalable, and decentralized data centers—empowering users to own and share the network.",
    isMap: true,
    onlyMobile: true,
    boxStyle:
      "w-full col-span-2 bg-black rounded-[2rem] h-[17rem] relative overflow-hidden",
    pragraphStyle: "absolute top-0 left-0 z-40 p-4",
    map: (
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: {lat: 64.2008, lng: -149.4937}, // Alaska (Fairbanks)
            end: {lat: -15.7975, lng: -47.8919}, // Brazil (Brasília)
          },
          {
            start: {lat: -15.7975, lng: -47.8919}, // Brazil (Brasília)
            end: {lat: 38.7223, lng: -9.1393}, // Lisbon
          },
          {
            start: {lat: 51.5074, lng: -0.1278}, // London
            end: {lat: 28.6139, lng: 77.209}, // New Delhi
          },
          {
            start: {lat: 28.6139, lng: 77.209}, // New Delhi
            end: {lat: 43.1332, lng: 131.9113}, // Vladivostok
          },
          {
            start: {lat: 28.6139, lng: 77.209}, // New Delhi
            end: {lat: -1.2921, lng: 36.8219}, // Nairobi
          },
        ]}
      />
    ),
  },
]

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="relative py-20 overflow-hidden bg-white text-slate-900"
    >
      <div className="container relative z-20 flex flex-col px-2 pb-10 mx-auto space-y-8 xl:px-20 xl:flex-row">
        <div className="flex flex-col space-y-4">
          <h3 className="text-4xl font-black lg:text-5xl">
            Join the Revolution
          </h3>
          <h4 className="text-lg font-bold lg:text-2xl">
            The Future of Blockchain and
            <br /> Decentralized Innovation
          </h4>
          <h5 className="w-full lg:w-[30%] xl:w-full tracking-wider leading-relaxed text-xl text-gray-600">
            Amazen Trust isn&rsquo;t just rewriting the rules of finance —
            it&rsquo;s building the foundation for a decentralized tomorrow.
            From secure P2P trading to owning a slice of the world's first wild
            network data center, the future starts here.
          </h5>
        </div>
        <div className="hidden lg:block place-self-end">
          <div className="relative grid grid-cols-3 grid-rows-2 gap-6 w-max place-items-end">
            {featureData.map((feature, index) => (
              <div key={index} className={feature.boxStyle}>
                <p
                  className={`${
                    feature.pragraphStyle && feature.pragraphStyle
                  } text-slate-300 w-[80%]`}
                >
                  <span className="font-bold tracking-wider text-slate-50">
                    {feature.title}
                  </span>
                  <br />
                  {feature.description}
                </p>
                {!feature.onlyMobile && (
                  <React.Fragment>
                    <img
                      src={feature.glowingImage}
                      alt="glowing"
                      className={`${feature.iconStyle} select-none`}
                      draggable="false"
                    />
                    <img
                      src={walletIcon}
                      alt="wallet_icon"
                      className={`${feature.glowingImageStyle} select-none`}
                      draggable="false"
                    />
                  </React.Fragment>
                )}
                {feature.isMap && (
                  <div className="absolute inset-x-0 z-10 mx-auto top-20 opacity-80">
                    {feature.map}
                  </div>
                )}
              </div>
            ))}
            <img
              src={featureImages}
              alt="Feature 1"
              className="absolute -bottom-1 -left-[2px] z-10 w-[36rem] select-none"
              draggable="false"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 lg:hidden">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className=" bg-black rounded-[2rem] h-[17rem] w-[17rem] relative overflow-hidden p-4"
            >
              <p className="relative w-[80%] text-slate-300 z-40 ">
                <span className="font-bold tracking-wider text-slate-50">
                  {feature.title}
                </span>
                <br />
                {feature.description}
              </p>
              {feature.icon && (
                <img
                  src={feature.icon}
                  alt="glowing"
                  className={`${feature.mobileIconStyle} z-10 select-none`}
                  draggable="false"
                />
              )}
              {feature.glowingImage && (
                <img
                  src={feature.glowingImage}
                  alt="wallet_icon"
                  className={`${feature.mobileGlowingImageStyle} select-none`}
                  draggable="false"
                />
              )}
              {feature.isMap && feature.map}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 z-20 flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-start justify-start w-full">
          <div className="w-[20%] h-[50px] bg-black" />
          <div className="border-r-[50px] border-r-transparent border-b-[50px] border-b-black" />
        </div>
        <div className="flex flex-row items-end justify-end w-full">
          <div className="border-l-[50px] border-l-transparent border-b-[50px] border-b-black" />
          <div className="w-[20%] h-[50px] bg-black" />
        </div>
      </div>
      <img
        src={bgBoxes}
        alt="bg box"
        className="absolute inset-0 z-10 object-cover m-auto opacity-10"
      />
    </div>
  )
}

export default FeaturesSection
