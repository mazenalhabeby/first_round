import {logoFooter} from "@/assets"

const SellToken = () => {
  return (
    <div className="bg-black">
      <div className="relative flex flex-row flex-wrap items-center justify-center w-full overflow-hidden">
        <img
          src={logoFooter}
          alt="logo footer"
          className="w-[24rem] select-none "
          draggable="false"
        />
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-orange-600 uppercase">
              Buy AMZ Now
            </span>
            <span className="text-3xl font-bold">at the Early Bird Price!</span>
          </h2>
          <p className="leading-relaxed text-center text-gray-400">
            Be the First to Join the Revolution <br /> and Shape the Future of
            Decentralized Trading!
          </p>
        </div>
      </div>
    </div>
  )
}

export default SellToken
