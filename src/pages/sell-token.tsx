import {logoFooter, LogoIcon, Usdc} from "@/assets"

const sellBoxitems = [
  {
    title: "you pay",
    input: "text",
    placeHolder: "$100 - $1000",
    icon: <Usdc className=" text-[40px] " />,
  },
  {
    title: "you receive",
    input: "text",
    placeHolder: "25.000 AMZ - 250.000 AMZ",
    icon: (
      <div className="p-2 bg-orange-500 rounded-full w-fit h-fit">
        <LogoIcon className="text-2xl" />
      </div>
    ),
  },
]

const SellToken = () => {
  return (
    <div className="bg-black">
      <div className="relative flex flex-row flex-wrap items-center justify-center overflow-hidden">
        <img
          src={logoFooter}
          alt="logo footer"
          className="w-[24rem] select-none "
          draggable="false"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-orange-600 uppercase lg:text-3xl">
              Buy AMZ Now
            </span>
            <span className="text-xl font-bold lg:text-2xl">
              at the Early Bird Price!
            </span>
          </h2>
          <p className="text-xs leading-relaxed text-center text-gray-400 lg:text-base">
            Be the First to Join the Revolution <br /> and Shape the Future of
            Decentralized Trading!
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around px-2 py-4 lg:px-0">
        <div className="flex flex-col gap-4 p-4 border lg:p-6 rounded-2xl border-slate-800">
          {sellBoxitems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-end justify-center gap-4 p-6 border rounded-2xl border-slate-800"
            >
              <div className="flex flex-col items-start justify-center gap-4">
                <span className="text-sm tracking-wider capitalize">
                  {item.title}
                </span>
                <input
                  type={item.input}
                  placeholder={item.placeHolder}
                  className="w-full p-2 text-2xl bg-transparent outline-none placeholder:text-slate-600 placeholder:text-sm lg:placeholder:text-lg"
                />
              </div>
              {item.icon}
            </div>
          ))}
          <div className="flex flex-row items-center justify-start gap-2 text-sm text-gray-400">
            <span>Estimated price</span>
            <span>1AMZ = 0.004 USDC</span>
          </div>
          <button
            className="w-full p-3 text-sm font-semibold tracking-wider uppercase bg-orange-500 rounded-full disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
            disabled
          >
            will be avalible soon
          </button>
        </div>
      </div>
    </div>
  )
}

export default SellToken
