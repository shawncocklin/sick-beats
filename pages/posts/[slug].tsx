import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import client from '@/client'
import groq from 'groq'
import { PortableText } from '@portabletext/react'
import { fraunces } from '@/utils/fonts'

import Heading from '@/components/Heading'

export default function Post({ post }: any) {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <article>
        <Heading
          title={post?.title}
          details={post?.subtitle}
          imageAlt={''}
          imageSrc={'https://source.unsplash.com/random/300x300?music'}
          imageH={300}
          imageW={300}
        />
        {/* <p>{post?.body[0].children[0].text}</p> */}
        <div className={`${fraunces.variable} font-serif mt-16`}>
          <PortableText value={post?.body} />
        </div>
      </article>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
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
  const post = await client.fetch(query, { slug })

  return {
    props: {
      post,
    },
  }
}
