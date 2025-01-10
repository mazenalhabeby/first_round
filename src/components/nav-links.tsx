import {Link as ScrollLink} from "react-scroll"

type NavbarLike = {
  name: string
  href: string
}

interface NavLinksProps {
  className?: string
  substyles?: string
}

const navbarLikes: NavbarLike[] = [
  {name: "features", href: "features"},
  {name: "P2P market", href: "peer-market"},
  {name: "user management", href: "user-management"},
  {name: "network", href: "network"},
  {name: "roadmap", href: "roadmap"},
]

const NavLinks: React.FC<NavLinksProps> = ({substyles, className}) => {
  return (
    <ul className={className}>
      {navbarLikes.map((link: NavbarLike, index: number) => (
        <li key={index}>
          <ScrollLink
            to={link.href}
            smooth={true}
            duration={500}
            spy={true}
            offset={-67}
            className={`duration-200 hover:text-orange-500 transation-colors ${substyles}`}
          >
            {link.name}
          </ScrollLink>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
