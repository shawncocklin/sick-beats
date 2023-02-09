import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      {children}
    </div>
  )
}
