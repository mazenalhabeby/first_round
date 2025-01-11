import {logoBg, sdkMarket, sdkExpress, sdkLogin} from "@/assets"

const UserManagmentSection = () => {
  return (
    <div
      id="user-management"
      className="relative py-8 overflow-hidden bg-white text-slate-900"
    >
      <div className="container relative z-20 flex flex-row flex-wrap justify-center gap-10 px-4 mx-auto">
        <div className="flex flex-col items-start justify-end gap-10 lg:w-1/2">
          <div className="flex flex-col space-y-4">
            <h3 className="text-4xl font-black lg:text-5xl">
              Empower Your Application with Our SDK
            </h3>
            <h5 className="text-xl leading-relaxed tracking-wider text-gray-600">
              Unlock the power of Amazen Trust SDK to integrate secure user
              management, robust authentication, and advanced payment solutions
              directly into your platform. From web to mobile apps, and even
              offline systems, our SDK empowers businesses with cutting-edge
              features.
            </h5>
          </div>
          <img
            src={sdkMarket}
            alt="sdk market"
            className="select-none "
            draggable={false}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <img
            src={sdkLogin}
            alt="sdk login"
            className="select-none max-w-[80%] lg:max-w-sm"
            draggable={false}
          />
          <img
            src={sdkExpress}
            alt="sdk express"
            className="max-w-[80%] lg:max-w-sm select-none"
            draggable={false}
          />
        </div>
      </div>

      <img
        src={logoBg}
        alt="logo"
        className="absolute inset-0 m-auto opacity-5 w-[750px] h-[750px] object-cover z-10 select-none"
        draggable={false}
      />
    </div>
  )
}

export default UserManagmentSection
