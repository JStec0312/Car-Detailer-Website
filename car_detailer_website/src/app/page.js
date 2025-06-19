import Topbar from "@/components/Topbar"
import Navbar from "@/components/Navbar"
import HeroContent from "@/components/Home/HeroContent"
import ServicesHome from "@/components/Home/ServicesHome"
import Gallery from "@/components/Home/Gallery"
import FancyCards from "@/components/Home/FancyCards"
import Opinions from "@/components/Home/Opinions"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="flex flex-col gap-16 pb-8">
      {/*topbar separated from hero*/}
        {/* Hero section with background image and navbar */}
        <section className="h-dvh w-dvw relative bg-[url('/images/hero.png')] bg-cover flex items-start flex-col  ">
          <Topbar />
          <Navbar />
          <HeroContent />
        </section>
        <ServicesHome />
        <Gallery/>
        <FancyCards/>
        <Opinions/>
        <Footer/>
    </main>
  )
}