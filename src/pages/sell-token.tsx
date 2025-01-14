import {Usdc, logoFooter, LogoIcon} from "@/assets"
import {useAccount} from "wagmi"
import {useForm, SubmitHandler} from "react-hook-form"
import {formatNumber} from "@/lib/formatNumber"

type Inputs = {
  pay: string
}

type SellBoxItem = {
  title: string
  inputName: string
  input: React.ReactNode
  icon: React.ReactNode
}

const SellToken = () => {
  const userAccount = useAccount()

  const {register, handleSubmit, watch} = useForm<Inputs>()

  const total = formatNumber(Number(watch("pay")) / 0.004)

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const sellBoxitems: SellBoxItem[] = [
    {
      title: "you pay",
      inputName: "pay",
      input: (
        <input
          type="number"
          min="0"
          {...register("pay")}
          placeholder="$100 - $1000"
          className="w-full p-2 text-2xl bg-transparent outline-none placeholder:text-slate-600 placeholder:text-sm lg:placeholder:text-lg disabled:cursor-not-allowed"
          disabled={!userAccount.isConnected}
        />
      ),
      icon: <Usdc className=" text-[40px] " />,
    },
    {
      title: "you receive",
      inputName: "receive",
      input: (
        <input
          type="text"
          placeholder="25.000 AMZ - 250.000 AMZ"
          className={`${
            !userAccount.isConnected && " opacity-0"
          } w-full p-2 text-2xl bg-transparent outline-none placeholder:text-slate-600 placeholder:text-sm lg:placeholder:text-lg disabled:cursor-not-allowed`}
          disabled={!userAccount.isConnected}
          readOnly
          value={total > "0" ? total : ""}
        />
      ),
      icon: (
        <div className="p-2 bg-orange-500 rounded-full w-fit h-fit">
          <LogoIcon className="text-2xl" />
        </div>
      ),
    },
  ]

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-4 border lg:p-6 rounded-2xl border-slate-800"
        >
          <w3m-button size="sm" />
          {sellBoxitems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-row items-end justify-center gap-4 p-6 border rounded-2xl border-slate-800 ${
                userAccount.isConnected
                  ? " opacity-100 cursor-auto"
                  : " opacity-40 cursor-not-allowed"
              }`}
            >
              <div className="flex flex-col items-start justify-center gap-4 group">
                <label
                  htmlFor={item.inputName}
                  className={`text-sm tracking-wider capitalize ${
                    userAccount.isConnected
                      ? " opacity-100 cursor-auto"
                      : " opacity-40 cursor-not-allowed"
                  }`}
                >
                  {item.title}
                </label>
                {item.input}
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
            disabled={
              !userAccount.isConnected ||
              Number(watch("pay")) < 100 ||
              Number(watch("pay")) > 1000
            }
          >
            {Number(watch("pay")) < 100
              ? "the minimum amount is $100"
              : Number(watch("pay")) > 1000
              ? "the maxmum amount is $1000"
              : userAccount.isConnected
              ? "buy AMZ now"
              : "connect your wallet"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SellToken
