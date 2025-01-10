import {Separator} from "@/components/ui/separator"

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We collect various types of information to ensure smooth operation and compliance with regulatory requirements. The categories of information we collect include:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "Personal Information",
            subItems: [
              "For General Users:",
              "Email Address",
              "Username",
              "Profile Information (optional)",
              "For Social Media Ads Engagement:",
              "Public social media profile information (e.g., name, username, and contact details) when interacting with our ads.",
              "Data provided through ad forms (e.g., surveys, sign-ups, or inquiries).",
            ],
          },
          {
            text: "Transaction Information",
            subItems: [
              "Details of transactions on the P2P marketplace, token purchases, and staking activities.",
            ],
          },
          {
            text: "Technical Information",
            subItems: [
              "IP address, device type, browser type, and usage statistics.",
              "Cookies and similar tracking technologies to enhance user experience.",
            ],
          },
          {
            text: "Engagement Data from Social Media",
            subItems: [
              "Insights and analytics data provided by platforms like Facebook, Instagram, Twitter, LinkedIn, and others when you interact with our content or ads.",
              "Information from lead forms filled out through social media platforms.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use the information collected for the following purposes:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "For Platform Users:",
            subItems: [
              "Account Management:",
              "Create and maintain user accounts.",
              "Transaction Processing:",
              "Facilitate P2P trades and other platform activities.",
              "Enhancing User Experience:",
              "Customize and improve platform features based on user feedback and behavior.",
            ],
          },
          {
            text: "For Social Media Engagement:",
            subItems: [
              "Targeted Advertising:",
              "Deliver tailored ads based on your interests, preferences, and engagement history.",
              "Lead Management:",
              "Process information submitted through ad forms for follow-ups, inquiries, or promotional offers.",
              "Analytics and Insights:",
              "Analyze ad performance and optimize campaigns for better outreach.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "3. Sharing and Disclosure of Information",
    content: [
      {
        type: "paragraph",
        text: "We do not sell your personal information. However, we may share it under the following circumstances:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "Legal Compliance",
            subItems: [
              "To comply with applicable laws, regulations, or legal processes.",
            ],
          },
          {
            text: "Service Providers",
            subItems: [
              "Third-party service providers assisting with payment processing, platform maintenance, and social media ad campaigns.",
            ],
          },
          {
            text: "Business Transfers",
            subItems: [
              "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
            ],
          },
          {
            text: "Social Media Platforms",
            subItems: [
              "When required, we may share aggregated or anonymized data with social media platforms for audience targeting and campaign optimization.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "4. Data Security",
    content: [
      {
        type: "paragraph",
        text: "We implement robust security measures to protect your information:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "Encryption:",
            subItems: [
              "All sensitive data is encrypted during transmission and storage.",
            ],
          },
          {
            text: "Access Controls:",
            subItems: [
              "Restricted access to personal information based on roles and responsibilities.",
            ],
          },
          {
            text: "Regular Audits:",
            subItems: [
              "Periodic security assessments to identify and mitigate risks.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "5. Your Rights",
    content: [
      {
        type: "paragraph",
        text: "You have the following rights concerning your information:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "Access and Update",
            subItems: [
              "Request access to your personal information and update inaccuracies.",
            ],
          },
          {
            text: "Deletion",
            subItems: [
              "Request the deletion of your personal data, subject to legal and regulatory obligations.",
            ],
          },
          {
            text: "Withdrawal of Consent",
            subItems: [
              "Withdraw your consent for data processing where applicable.",
            ],
          },
          {
            text: "To exercise these rights, contact us at [Insert Contact Email].",
          },
        ],
      },
    ],
  },
  {
    title: "6. Retention of Data",
    content: [
      {
        type: "paragraph",
        text: "We retain personal information:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "For as long as necessary to fulfill the purposes outlined in this policy.",
          },
          {
            text: "To comply with legal, tax, and regulatory requirements.",
          },
        ],
      },
    ],
  },
  {
    title: "7. Cookies and Tracking",
    content: [
      {
        type: "paragraph",
        text: "We use cookies to:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "Enhance user experience.",
          },
          {
            text: "Analyze platform performance and usage.",
          },
          {
            text: "Provide tailored content and advertising.",
          },
          {
            text: "You can manage cookie preferences through your browser settings.",
          },
        ],
      },
    ],
  },
  {
    title: "8. Seed Round-Specific Privacy Practices",
    content: [
      {
        type: "paragraph",
        text: "For the Seed Round fundraising phase:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "We do not collect personal information beyond what is necessary to facilitate transactions.",
          },
          {
            text: "Token purchases during the seed round are processed through users’ connected cryptocurrency wallets.",
          },
          {
            text: "No additional personal details (e.g., names, addresses) are required unless explicitly provided for communication or support purposes.",
          },
        ],
      },
    ],
  },
  {
    title: "9. Social Media Advertising Practices",
    content: [
      {
        type: "paragraph",
        text: "To ensure compliance with social media policies and enhance user engagement:",
      },
      {
        type: "list",
        listType: "ul",
        items: [
          {
            text: "Transparency:",
            subItems: [
              "Clearly disclose the purpose of data collection through ads, including lead forms and engagement tracking.",
            ],
          },
          {
            text: "User Consent:",
            subItems: [
              "Obtain explicit consent for data collection where required by social media platforms or local laws.",
            ],
          },
          {
            text: "Ad Targeting:",
            subItems: [
              "Use anonymized or aggregated data for creating targeted ad campaigns.",
            ],
          },
          {
            text: "Data Sharing:",
            subItems: [
              "Share limited data with social media platforms strictly for ad delivery and performance analysis.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "10.Changes to This Policy",
    content: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated policy will be published on our website, and significant changes will be communicated to registered users.",
      },
    ],
  },
]
export function Privacy() {
  return (
    <div className="px-5 py-10 bg-black">
      <div className="max-w-4xl p-8 mx-auto rounded-md shadow-md bg-slate-900">
        <h1 className="mb-4 text-3xl font-bold text-center">
          Privacy Policy for Amazen Trust
        </h1>
        <p className="mb-6 text-sm text-center text-gray-100">
          At Amazen Trust, we are committed to safeguarding the privacy and
          personal information of our users, investors, and stakeholders. This
          Privacy Policy outlines how we collect, use, disclose, and protect
          your information when you interact with our platform, including during
          the Seed Round fundraising phase and through interactions originating
          from social media platforms.
        </p>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="mb-3 text-xl font-bold">{section.title}</h2>
            {section.content.map((content, idx) =>
              content.type === "paragraph" ? (
                <p key={idx} className="mb-2 text-gray-300 ">
                  {content.text}
                </p>
              ) : (
                <ul
                  key={idx}
                  className="flex flex-col gap-6 pl-5 mb-2 text-gray-100"
                >
                  {content.items &&
                    content.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="mb-2">
                        <span className="inline-block py-6 font-bold">
                          {item.text}
                        </span>
                        {item.subItems && (
                          <ul className="flex flex-col gap-4 pl-5 list-disc list-inside list-circle">
                            {item.subItems.map((subItem, subIdx) => (
                              <li key={subIdx} className="px-4 mb-1">
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                </ul>
              )
            )}
          </div>
        ))}
        <Separator />
        <p className="py-4 list-disc list-item text-slate-400">
          By using Amazen Trust, you agree to this Privacy Policy. For seed
          round participants and social media users, your continued
          participation indicates acceptance of these terms.
        </p>
      </div>
    </div>
  )
}
