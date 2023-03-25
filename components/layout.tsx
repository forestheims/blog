import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 via-purple-500 via-pink-500 to-pink-500">
        <main>{children}</main>
      <Footer />
      </div>
      {/* <Alert preview={preview} /> */}
    </>
  )
}

export default Layout
