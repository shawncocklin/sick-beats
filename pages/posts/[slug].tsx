import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import client from '@/client'

import Heading from '@/components/Heading'

export default function Post({ post }: any) {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <Link href="/">Home</Link>
      <article>
        <Heading
          title={post?.title}
          details={post?.subtitle}
          imageAlt={''}
          imageSrc={'https://source.unsplash.com/random/300x300?music'}
          imageH={300}
          imageW={300}
        />
        <p>{post?.body[0].children[0].text}</p>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context: {
  params: { slug?: '' | undefined }
}) {
  const { slug = '' } = context.params
  const post = await client.fetch(
    `
  *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  )

  return {
    props: {
      post,
    },
  }
}
