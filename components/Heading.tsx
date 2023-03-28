import React from 'react'
import { fraunces, novaMono } from '@/utils/fonts'

type Props = {
  imageSrc?: string
  title: string
  details?: string
  imageH?: number
  imageW?: number
  imageAlt: string | ''
}

export default function Heading({
  imageSrc,
  imageH,
  imageW,
  imageAlt,
  title,
  details,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      {imageSrc && imageH && imageW && (
        <img
          src={imageSrc}
          height={imageH}
          width={imageW}
          alt={imageAlt}
          className="rounded-full"
        />
      )}

      <h1 className={`${novaMono.variable} font-mono text-6xl`}>{title}</h1>
      <h2 className={`${fraunces.variable} font-serif text-2xl`}>{details}</h2>
    </div>
  )
}
