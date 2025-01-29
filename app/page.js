import Hero from "@/components/hero";
import News from "@/components/news";
import Tesimonial from "@/components/tesimonial";
import Contact from "@/components/contact";
import About from "@/components/about";
export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Hero autoplay={true} pauseOnHover={true} />
      <News />
      <About />
      <Tesimonial />
      <Contact />
    </div>
  );
}
