const Header = () => {
  return (
    <header className="flex row gap-4 justify-end">
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <a href="https://forestheims.net/" className="hover:underline" referrerPolicy="origin">
        Home
      </a>
    </h2>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <a href="/" className="hover:underline">
        Blog
      </a>
    </h2>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <a href="https://forestheims.org/" className="hover:underline" referrerPolicy="origin">
        Projects
      </a>
    </h2>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <a href="https://forestheims.com/" className="hover:underline" referrerPolicy="origin">
        Contact
      </a>
    </h2>
    </header>
  )
}

export default Header
