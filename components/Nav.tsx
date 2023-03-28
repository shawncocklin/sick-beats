import Link from 'next/link'
import React from 'react'
import logov2 from '@/public/images/logov2.png'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <Image
          src={logov2}
          alt="Sick Beats"
        />
      </Link>
    </nav>
  )
}
