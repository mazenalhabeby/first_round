import {LogoIcon} from "@/assets"

const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-1 w-max">
      <LogoIcon className="text-4xl" />
      <h1 className="flex flex-col uppercase tracking-wider font-bold leading-[1.1rem] text-center text-lg">
        <span>amazen</span>
        <span className=" tracking-[0.25rem]">trust</span>
      </h1>
    </div>
  )
}

export default Logo
