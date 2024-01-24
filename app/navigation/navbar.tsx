import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className="text-white flex justify-between py-5 bg-green-600">
        <Link href="/" className=" ml-4 font-jetbrains-bold" >Caleb Babione</Link>
        <ul className="flex mr-4">
            <li className="px-2"><Link href="/blog">Blog</Link></li>
            <li className="px-2">Resume</li>
        </ul>
    </div>
  )
}

export default navbar