import Header from "@/app/(landing)/components/Header";
import HeroSection from "./(landing)/components/HeroSection";
import About from "@/app/(landing)/components/About";
import WhyCodeSync from "./(landing)/components/WhyCodeSync";
import Cta from "./(landing)/components/Cta";
import Footer from "./(landing)/components/Footer";

export default function Home() {
  return (
    <div >
      <Header/>
      <HeroSection/>
      <About/>
      <WhyCodeSync/>
      <Cta/>
      <Footer/>
    </div>
  );
}
