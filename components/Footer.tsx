import Link from "@components/Link"
import Logo from "@components/Logo"
import React from "react"

const railwayUrl = (page: string): string => `https://railway.app/${page}`

const Footer: React.FC = () => {
  return (
    <footer className="px-5 md:px-8 py-12 border-t border-gray-100">
      <div className="grid grid-cols-2 sm:grid-cols-12 gap-8 sm:gap-4 lg:gap-16 max-w-6xl mx-auto">
        <div className="hidden sm:flex col-span-3 lg:col-span-4 flex-col justify-between">
          <Link href="https://manchestermachinemakers.org">
            <Logo />
          </Link>

          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer

const FooterListLink: React.FC<{
  href: string
  children?: React.ReactNode
}> = ({ children, href }) => (
  <li>
    <Link href={href} className="hover:text-foreground">
      {children}
    </Link>
  </li>
)

const Copyright: React.FC = () => (
  <div className="text-xs text-gray-500 w-full">
    Copyright © 2020-2023 Railway Corp. <br/>
    Copyright © {new Date().getFullYear()} The Manchester Machine Makers. <br />
    All rights reserved.
  </div>
)
