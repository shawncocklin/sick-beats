import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav>
      <h1>Nav</h1>
      <Link href="/posts/first-post">First Post!</Link>
    </nav>
  )
}
