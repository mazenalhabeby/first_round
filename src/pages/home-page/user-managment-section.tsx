import {sdkMarket, sdkExpress, sdkLogin, electroBg} from "@/assets"

export const UserManagmentSection = () => {
  return (
    <section
      id="user-management"
      className="relative py-8 overflow-hidden bg-white text-slate-900"
    >
      <div className="container mx-auto">
        <div className="relative z-20 flex flex-row flex-wrap justify-center gap-10 px-4 ">
          <div className="flex flex-col items-start justify-end gap-10 lg:w-1/2">
            <div className="flex flex-col space-y-4">
              <h3 className="text-3xl font-black lg:text-4xl">
                Empower Your Application
                <br /> with Our SDK
              </h3>
              <h5 className="leading-relaxed tracking-wider text-gray-600 ">
                Unlock the power of Amazen Trust SDK to integrate secure user
                management, robust authentication, and advanced payment
                solutions directly into your platform. From web to mobile apps,
                and even offline systems, our SDK empowers businesses with
                cutting-edge features.
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
