import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/logo.png" width={50} height={48} />
        <h1>Comder2.0</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Problems</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}
