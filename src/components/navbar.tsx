import Logo from "./logo"
import {Button} from "./ui/button"
import {Link, NavLink, useLocation} from "react-router"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {FaBarsStaggered} from "react-icons/fa6"
import NavLinks from "./nav-links"

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <nav className="sticky top-0 left-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link to="/">
          <Logo />
        </Link>
        {isHomePage ? (
          <NavLinks
            className="flex-row items-center justify-center hidden space-x-6 lg:flex"
            substyles="capitalize text-sm cursor-pointer font-medium"
          />
        ) : (
          <div className="flex flex-1" />
        )}
        <div className="flex items-center space-x-4">
          <Button asChild className="capitalize rounded-full">
            <NavLink to="https://amazen-trust.gitbook.io/white-paper">
              white paper
            </NavLink>
          </Button>
          <Sheet>
            <SheetTrigger className="flex lg:hidden">
              <FaBarsStaggered />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription>
                  Secure Trades. Smart Authentication. Ultimate Trust.
                </SheetDescription>
                <NavLinks
                  className="flex flex-col items-center justify-center py-6 space-y-6"
                  substyles="capitalize text-2xl cursor-pointer"
                />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
