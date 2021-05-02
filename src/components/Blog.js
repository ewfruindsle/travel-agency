import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [projectData, setProject] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then(data => setProject(data))
      .catch(console.error)
  }, [])

  return (
    <main className="bg-yellow-50 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-10">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article>
                <Link
                  to={'/blog/' + project.slug.current}
                  key={project.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-400"
                    key={index}
                  >
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-center items-end pr-4 pb-4 pl-4 md:text-center">
                      <h3 className="text-gray-800 text-4xl text-lg font-blog px-3 py-4 bg-yellow-400 text-yellow-50 bg-opacity-75 rounded">
                        {project.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}
