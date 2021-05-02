import React, { useEffect, useState } from 'react'
import aboutImage from '../img/contact-page-img.jpeg'
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <main className="relative">
      <img src={aboutImage} alt="About Image" className="absolute w-full" />
      <div className="p10 lg:py-20  container mx-auto relative">
        <section className="bg-yellow-400 rounded-lg shadow-2xl lg:flex p-20 opacity-90">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-5xl text-white mb-4">CONTACT US</h1>
            <p className="cursive text-2xl text-gray-800 mb-4">
              If you have a story to share or a question that has not been
              answered on Wanderlust website, please get in touch with us via
              contact details listed below.
            </p>
            <p className="cursive text-1xl text-gray-800 mb-4">
              <FiMapPin class="inline-block" /> Mykolaiv, Ukraine, Admirala
              Grejga st.1
            </p>
            <p className="cursive text-1xl text-gray-800 mb-4">
              <FiPhoneCall class="inline-block" /> +123 456 78911
            </p>
            <p className="cursive text-1xl text-gray-800 mb-4">
              <FiMail class="inline-block" /> wonderlust_trvl@email.com
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
