import React from 'react'
import Image, { StaticImageData } from 'next/image'

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
    <div className="flex flex-col items-center gap-4 mt-10">
      {imageSrc && imageH && imageW && (
        <img
          src={imageSrc}
          height={imageH}
          width={imageW}
          alt={imageAlt}
          className="rounded-full"
        />
      )}

      <h1>{title}</h1>
      <h2>{details}</h2>
    </div>
  )
}
