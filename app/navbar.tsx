import React from 'react'
import Link from 'next/link'
import {AiFillBug} from 'react-icons/ai'

const Navbar = () => {
  const Links = [
     {label: 'Dashboard', href:'/'},
     {label: 'Issues', href:'/Issues'}
  ]
  return (
    <nav className='flex space-x-4 border-b mb-6 px-5 h-14 items-center'>
        <Link className=' text-red-700' href="/"><AiFillBug /></Link>
        <ul className='flex space-x-4 '>
          {Links.map(links =><Link key={links.href} className='text-zinc-400 hover:text-zinc-950 transition-colors' href={links.href}>{links.label}</Link> )}
        </ul>
    </nav>
  )
}

export default Navbar