import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosPin } from 'react-icons/io'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BiNotepad, BiMessageDetail } from 'react-icons/bi'

export default function NavBar() {
  return (
    <header className="bg-yellow-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-yellow-900 text-4xl font-bold cursive tracking-widest"
          >
            <IoIosPin />
            Wanderlust
          </NavLink>
          <NavLink
            to="/trips"
            activeClassName="text-red-100 bg-yellow-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-100 hover:text-yellow-900 text-2xl"
          >
            <FaMapMarkedAlt  className="mr-1"/> Tours & Trips
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-red-100 bg-yellow-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-100 hover:text-yellow-900 text-2xl"
          >
            <BiNotepad className="mr-1"/> Blog
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-red-100 bg-yellow-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-100 hover:text-yellow-900 text-2xl"
          >
            <BiMessageDetail className="mr-1"/> Contact us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
