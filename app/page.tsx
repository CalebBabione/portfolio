import Image from 'next/image'
import Link from 'next/link'
import PFP from '../public/pic.jpg'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    //test
    <main className="text-center">
      <section className="">
       <Image className=" m-5 ml-auto mx-auto rounded-full border-4 border-green-600" src={PFP} alt="Pic of Caleb Babione"/>

       <div>
        <h1 className="font-jetbrains-bold text-3xl">Caleb Babione</h1>
        <h2 className="text-xl">Full time client support specialist, and a never ending student.</h2>
        <p className="text-sm leading-8">I am your humble client support specialist, eager to learn, and looking for things to do!</p>
        <p className="text-sm leading-8">Feel free to look around, and if you like what you see, check out my socials!</p>
       </div>

      <ul className=" my-5 flex justify-center text-6xl">
        <li className="mx-16"><Link href="https://www.youtube.com/channel/UCeFt6MTlRPu6opHewhLtW8A">< FaYoutube /></Link></li>
        <li className="mx-16"><Link href="https://www.linkedin.com/in/caleb-babione-4b2b6625a?trk=public_post_feed-actor-image">< FaLinkedin /></Link></li>
        <li className="mx-16"><Link href="https://github.com/CalebBabione?tab=repositories">< FaGithubSquare /></Link></li>
       </ul>
      </section>

      <section>
        <div>
         <h1 className=" mt-40 font-jetbrains-bold text-5xl">Where To Go?</h1>
        </div>

        <div className=' shadow-md rounded-xl text-left my-6 ml-auto mr-auto p-4 max-w-sm bg-slate-100'>
            <Link className=' font-jetbrains-bold text-xl' href="./blog">My Blog:</Link>
            <p>Check out blog, where my future, and old projects will be posted.</p>
        </div>

        <div className='text-left shadow-md rounded-xl my-6 ml-auto mr-auto p-4 max-w-sm bg-slate-100'>
          <Link className=' font-jetbrains-bold text-xl' href="https://github.com/CalebBabione?tab=repositories">GitHub:</Link>
          <p>If you want to look at, or use my code, you may look here and use whatever you want.</p>
        </div>


        <div className='shadow-md rounded-xl text-left my-6 ml-auto mr-auto p-4 max-w-sm bg-slate-100'>
          <Link className=' font-jetbrains-bold text-xl' href="https://www.youtube.com/channel/UCeFt6MTlRPu6opHewhLtW8A">Youtube:</Link>
          <p>Check out my youtube, where I like to post, gaming, and educational content.</p>
        </div>


        <div className=' text-left shadow-md rounded-xl my-6 ml-auto mr-auto p-4 max-w-sm bg-slate-100'>
          <Link className=' font-jetbrains-bold text-xl' href="./futureprojects">Future Projects:</Link>
          <p>Here are a few projects I would like to, or will post a blog about in the future.</p>
        </div>

      </section>

    </main>
  )
}
