import {logoShield} from "@/assets"
import {AuroraBackground} from "@/components/ui/aurora-background"
import {FaArrowRightLong} from "react-icons/fa6"
import {motion} from "framer-motion"
import {useRef} from "react"
import {Link} from "react-router"

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full overflow-hidden h-section-header bg-grid-small-white/[0.1]"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-start py-8 mx-auto space-y-8 text-center xl:space-y-6 w-max">
        <motion.h1
          initial={{opacity: 0, x: -75}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 0.5}}
          className="text-4xl font-bold lg:text-7xl"
        >
          The Ultimate <br />
          Platform for Trust
        </motion.h1>
        <motion.h2
          initial={{opacity: 0, y: 75}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.5}}
          className="text-xs leading-relaxed tracking-wider lg:text-base text-slate-300 w-[99%]"
        >
          Experience seamless P2P transactions, secure authentication,
          <br /> and groundbreaking innovation — all in one trusted platform.
        </motion.h2>
        <motion.div
          initial={{opacity: 0, y: 75}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1}}
        >
          <Link
            to={"/sell-amz"}
            className="relative flex flex-row items-center gap-x-5 px-6 py-2 text-sm font-bold text-[#4a2e0c] bg-gradient-to-r from-white to-[#f8f1e9] rounded-full shadow-[0_0_10px_rgba(255,154,85,0.6),0_0_40px_rgba(255,154,85,0.4)] hover:shadow-[0_0_20px_rgba(255,154,85,0.8),0_0_60px_rgba(255,154,85,0.6)] transition-all duration-300 ease-in-out group"
          >
            <span className="absolute top-0 right-0 rounded-full w-9 h-9 bg-gradient-to-r from-orange-600 to-orange-300 blur-lg"></span>
            <span className="absolute top-0 right-0 bg-white rounded-full opacity-30 w-9 h-9 blur"></span>
            <span>BUY AMZ NOW</span>
            <FaArrowRightLong />
          </Link>
        </motion.div>
      </div>
      <AuroraBackground className="absolute inset-0 z-20 w-full mx-auto opacity-30">
        <div />
      </AuroraBackground>
      <motion.img
        initial={{opacity: 0, y: 75}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 1.2}}
        src={logoShield}
        className="absolute inset-0 w-full xl:w-[35%] m-auto -bottom-[34rem] z-20 select-none"
        alt="logo shield"
        draggable="false"
      />
      <div className="absolute bottom-0 z-40 w-full h-28 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default HeroSection
