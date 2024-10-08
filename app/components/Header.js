import { headers } from "next/headers.js"
import Link from "next/link.js"

const Header = () => {
  return (
    <header>
        <span>ctrProgect</span>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </nav>
    </header>
  )
}

export default Header