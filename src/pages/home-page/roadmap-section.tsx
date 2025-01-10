import {Timeline} from "@/components/ui/timeline"
import {FaSquareCheck} from "react-icons/fa6"
import {Holding, Progress} from "@/assets"

type statusType = "done" | "progress" | "holding"

type roadMapDataSubContentType = {
  step: string
  status: statusType
}

type roadMapDataContentType = {
  title: string
  status: statusType
  subContent: roadMapDataSubContentType[]
}

type roadMapDataType = {
  title: string
  content: roadMapDataContentType[]
}

const roadMapData: roadMapDataType[] = [
  {
    title: "Research and Planning",
    content: [
      {
        title: "Market Analysis",
        status: "done",
        subContent: [
          {
            step: "Conduct competitor analysis and perform an in-depth market study.",
            status: "done",
          },
          {
            step: "Identify common downsides such as high fees, lack of user trust, and limited fiat options.",
            status: "done",
          },
          {
            step: "Determine market gaps and create strategies to address them.",
            status: "done",
          },
        ],
      },
      {
        title: "Technical Feasibility",
        status: "done",
        subContent: [
          {
            step: "Outline system architecture for the P2P platform, secure authentication, and the future decentralized network.",
            status: "done",
          },
        ],
      },
    ],
  },
  {
    title: " Fundraising and Presale",
    content: [
      {
        title: "Token Presale",
        status: "progress",
        subContent: [
          {
            step: "Design and execute a token presale campaign to raise funds for development.",
            status: "done",
          },
          {
            step: "Offer a limited supply of tokens at a discounted price to early investors.",
            status: "done",
          },
          {
            step: "Promote the presale through targeted marketing and partnerships.",
            status: "progress",
          },
        ],
      },
      {
        title: "Community Building",
        status: "progress",
        subContent: [
          {
            step: "Engage with the community through social media, forums, and events.",
            status: "progress",
          },
        ],
      },
    ],
  },
  {
    title: "Platform Development",
    content: [
      {
        title: "P2P Marketplace Development",
        status: "progress",
        subContent: [
          {
            step: "Build a user-friendly platform with features like low fees, quick transactions, escrow services, and robust security measures.",
            status: "progress",
          },
          {
            step: "Incorporate multi-language support and user verification for trust-building.",
            status: "progress",
          },
          {
            step: "Develop wallet integration for both cryptocurrency and fiat.",
            status: "holding",
          },
        ],
      },
      {
        title: "Authentication and Authorization",
        status: "holding",
        subContent: [
          {
            step: "Implement secure user management features including registration, login, two-factor authentication (2FA), and role-based access control.",
            status: "holding",
          },
          {
            step: "Build APIs and SDKs for integrating the P2P market into third-party applications.",
            status: "holding",
          },
          {
            step: "Focus on scalability and modularity for easy adoption by businesses.",
            status: "holding",
          },
        ],
      },
      {
        title: "Beta Testing",
        status: "holding",
        subContent: [
          {
            step: "Test the platform with a select group of users to gather feedback and fix issues.",
            status: "holding",
          },
          {
            step: "Ensure the platform adheres to legal and security standards.",
            status: "holding",
          },
        ],
      },
    ],
  },
  {
    title: "Launch and Growth",
    content: [
      {
        title: "Initial Launch",
        status: "holding",
        subContent: [
          {
            step: "Launch the platform in a few testing countries",
            status: "holding",
          },
          {
            step: "Promote the platform through local partnerships and targeted marketing.",
            status: "holding",
          },
          {
            step: "Listing the token in decentralized exchange.",
            status: "holding",
          },
        ],
      },
      {
        title: "Global Expansion",
        status: "holding",
        subContent: [
          {
            step: "Gradually expand to other regions, focusing on underserved markets.",
            status: "holding",
          },
          {
            step: "Introduce multilingual support and localized features.",
            status: "holding",
          },
          {
            step: "Listing the token on centralized exchanges.",
            status: "holding",
          },
          {
            step: "expand with a gorilla marketing widely.",
            status: "holding",
          },
        ],
      },
    ],
  },
  {
    title: "Secure Wild Network",
    content: [
      {
        title: "Development and Testing",
        status: "holding",
        subContent: [
          {
            step: "Build a prototype of the decentralized wild network.",
            status: "holding",
          },
          {
            step: "Focus on user-friendly node setup and transparent pricing.",
            status: "holding",
          },
          {
            step: "Conduct rigorous security testing.",
            status: "holding",
          },
        ],
      },
      {
        title: "Hosting and Profitability",
        status: "holding",
        subContent: [
          {
            step: "Develop secure servers that users can purchase to host online business websites, applications, and other online services.",
            status: "holding",
          },
          {
            step: "Create a profitable hosting ecosystem with competitive pricing and reliable support.",
            status: "holding",
          },
        ],
      },
      {
        title: "Launch",
        status: "holding",
        subContent: [
          {
            step: "Introduce the wild network to early adopters.",
            status: "holding",
          },
          {
            step: "Offer attractive pricing models for individuals and businesses to join.",
            status: "holding",
          },
        ],
      },
    ],
  },
]

const RoadmapSection = () => {
  const checkStatus = (item: statusType, fontSize: string) => {
    return item === "done" ? (
      <FaSquareCheck className={`${fontSize} text-green-600`} />
    ) : item === "progress" ? (
      <Progress className={`${fontSize} text-orange-500`} />
    ) : (
      <Holding className={`${fontSize} text-gray-500`} />
    )
  }

  const data = roadMapData.map((item: roadMapDataType) => ({
    title: item.title,
    content: item.content.map(
      (contentItem: roadMapDataContentType, contentIndex: number) => (
        <div
          key={contentIndex}
          className="flex flex-col items-start justify-center gap-3 p-4 text-black bg-gray-200 rounded-xl w-fit lg:w-max"
        >
          <div className="flex flex-row items-center gap-2">
            {checkStatus(contentItem.status, "text-lg")}
            <h3 className="text-sm font-bold lg:text-lg">
              {contentItem.title}
            </h3>
          </div>
          {contentItem.subContent.map(
            (subItem: roadMapDataSubContentType, subIndex: number) => (
              <div
                key={subIndex}
                className="flex flex-row items-start gap-2 px-6 font-medium"
              >
                {checkStatus(subItem.status, "hidden md:block text-base")}
                <p
                  className={`${
                    subItem.status === "done"
                      ? "line-through text-gray-500"
                      : "text-gray-700"
                  } max-w-sm text-xs lg:text-sm capitalize`}
                >
                  {subItem.step}
                </p>
              </div>
            )
          )}
        </div>
      )
    ),
  }))

  return (
    <div id="roadmap" className="w-full bg-white">
      <Timeline data={data} />
    </div>
  )
}

export default RoadmapSection
