import React from 'react'
import image from '../img/main-page-img.jpeg'

export default function Home() {
  return (
    <main>
      <img src={image} className="absolute object-cover w-full h-full" />
      <section className="relative flex justify-start lg:py-20 px-20">
        <div className="bg-white bg-opacity-75 rounded p-12">
          <h1 className="text-8xl text-yellow-400 font-bold cursive leading-none lg:leading-snug md:text-center">
            Welcome to Wanderlust travel agency!
          </h1>

          {/* <h1 className="text-8xl text-yellow-400 font-bold cursive leading-none lg:leading-snug">
            
          </h1> */}
        </div>
      </section>
    </main>
  )
}
