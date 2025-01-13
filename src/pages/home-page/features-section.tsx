import {electroBg, layers, network, p2p, sdk} from "@/assets"

const featureData = [
  {
    title: "Your Crypto, Secure.",
    description:
      "Experience a powerful wallet with multi-layer security, seamless payments.",
    row: "row-span-1",
    img: layers,
  },
  {
    title: "P2P Market.",
    description:
      "Experience seamless peer-to-peer transactions with low fees, AI-powered security.",
    row: "row-span-1",
    img: p2p,
  },
  {
    title: "Redefining Data with Decentralization.",
    description:
      "Join the future of secure, scalable, and decentralized data centers—empowering users to own and share the network.",
    row: "row-span-1",
    img: network,
  },
  {
    title: "Simplify Management.",
    description: "Seamless user management, and SDK integration.",
    row: "row-span-1",
    img: sdk,
  },
]

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-20 overflow-hidden bg-white text-slate-900  xl:rounded-tl-[30rem]"
    >
      <div className="relative z-20 flex flex-col items-center justify-center w-full space-y-4">
        <h3 className="text-3xl font-black lg:text-4xl">Join the Revolution</h3>
        <h4 className="text-xl font-bold text-center ">
          The Future of Blockchain and
          <br /> Decentralized Innovation
        </h4>
        <h5 className="w-full px-4 leading-relaxed tracking-wider text-center text-gray-600 lg:w-1/2">
          Amazen Trust isn&rsquo;t just rewriting the rules of finance —
          it&rsquo;s building the foundation for a decentralized tomorrow. From
          secure P2P trading to owning a slice of the world&apos;s first wild
          network data center, the future starts here.
        </h5>
      </div>
      <div className="relative z-20 flex flex-row flex-wrap items-center justify-center max-w-5xl gap-8 px-4 mx-auto my-12 lg:px-0">
        {featureData.map((item, index) => (
          <div
            key={index}
            className={`p-6 bg-slate-50 rounded-2xl shadow-lg bg-opacity-80 backdrop-blur border border-slate-200 row-span-1 relative bg-grid-black/[0.05] max-w-sm`}
          >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col items-center">
              <div className=" min-h-[168px] flex items-center justify-center my-4">
                <img src={item.img} alt="items image" />
              </div>
              <div className=" relative bg-slate-50 backdrop-blur-lg min-h-[125px] lg:min-w-96 px-4">
                <h3 className="mb-2 text-lg font-bold">
                  {item.title && item.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {item.description && item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={electroBg}
        alt="logo"
        className="absolute inset-0 z-10 object-cover m-auto opacity-50 select-none"
        draggable={false}
      />
    </section>
  )
}
