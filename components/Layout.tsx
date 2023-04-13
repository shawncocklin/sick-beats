import Nav from './Nav'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`flex flex-col justify-center items-center py-5 px-6`}>
      <Nav />
      {children}
    </div>
  )
}
