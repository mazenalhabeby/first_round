import {createAppKit} from "@reown/appkit/react"
import {WagmiProvider} from "wagmi"
import {AppKitNetwork, bsc} from "@reown/appkit/networks"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {WagmiAdapter} from "@reown/appkit-adapter-wagmi"

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = import.meta.env.VITE_PROJECT_ID

if (!projectId) {
  throw new Error("Project ID is not defined")
}

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://www.amazentrust.com/", // origin must match your domain & subdomain
  icons: ["../assets/images/logo.png"],
}

// 3. Set the networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [bsc]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false,
    socials: false,
    swaps: false,
    send: false,
    onramp: true,
  },
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#f97316",
  },
})

export function AppKitProvider({children}: {children: React.ReactNode}) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
