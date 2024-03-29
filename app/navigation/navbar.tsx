import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PFP from '/public/pic.jpg'

const navbar = () => {
  return (
    <div className="text-white flex justify-between py-5 bg-green-600">
        <Link href="/" className=" ml-4 font-jetbrains-bold hover:underline" >Caleb Babione</Link>
        <ul className="flex mr-4">
            <li className="px-2 hover:underline"><Link href="/blog">Blog</Link></li>
            <li className="px-2 hover:underline"><a href="/CalebBabione.pdf">Resume</a></li>
        </ul>
    </div>
  )
}

export default navbar