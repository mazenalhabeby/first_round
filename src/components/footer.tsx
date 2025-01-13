import {FaXTwitter} from "react-icons/fa6"
import {FaTelegramPlane} from "react-icons/fa"
import {LogoIcon} from "@/assets"
import {Link} from "react-router"

const Footer = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-6 py-6 text-sm text-center bg-black xl:gap-20">
      <span className="text-gray-500 ">
        Copyright &copy; {new Date().getFullYear()} Amazen Trust. All rights
        reserved.
      </span>
      <ul className="flex flex-row gap-4">
        <li>
          <Link to={"/privacy"}>privacy policy</Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-4">
        <li>
          <FaXTwitter />
        </li>
        <li>
          <FaTelegramPlane />
        </li>
      </ul>
      <div className="flex flex-row items-center gap-2">
        <span className="text-xs lg:text-sm">
          Built with Trust, Powered by Innovation
        </span>
        <LogoIcon className="text-xl text-orange-400" />
        <span className="text-[10px] lg:text-sm font-semibold tracking-wider uppercase">
          Amazen Trust
        </span>
      </div>
    </div>
  )
}

export default Footer
