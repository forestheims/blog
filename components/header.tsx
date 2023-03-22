import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex row gap-4 justify-end">
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="https://forestheims.net/" className="hover:underline">
        Home
      </Link>
    </h2>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
    </h2>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="https://forestheims.org/" className="hover:underline">
        Projects
      </Link>
    </h2>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="https://forestheims.com/" className="hover:underline">
        Contact
      </Link>
    </h2>
    </header>
  )
}

export default Header
