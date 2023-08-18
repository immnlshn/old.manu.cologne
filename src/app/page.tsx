"use client"
import Contact from './components/Contact'
import Hero from './components/Hero'
import Skills from './components/Skills'




export default function Home() {
  return (
    <main className="lg:max-h-screen lg:overflow-y-scroll lg:snap-mandatory lg:snap-y ">
      <Hero className='lg:snap-start'/>
      <Skills className='lg:snap-start'/>
      <Contact className='lg:snap-start'/>
    </main>
  )
}
