import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import BlockContent from '@sanity/block-content-to-react'

export default function SingleBlogPost() {
  const [singleProject, setSingleProject] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
    title,
    _id,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    body
  }`
      )
      .then(data => setSingleProject(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singleProject) return <div>Loading...</div>

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-purple-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singleProject.title}
              </h1>
            </div>
          </div>
          <img
            src={singleProject.mainImage.asset.url}
            alt={singleProject.title}
            className="w-full object-cover rounded-t"
            style={{ height: '400px' }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singleProject.body}
            projectId="24t97rg4"
            dataset="production"
          />
        </div>
      </article>
    </main>
  )
}
