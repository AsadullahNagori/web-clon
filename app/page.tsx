import Navbar from"@/app/components/Navbar/page"

import Futured from "@/app/components/Futured/page";
import Hero from"@/app/components/Hero/page"
import Footer from"@/app/components/Footer/page"

export default function Home() {
  return ( <div>
    <Navbar />
   
    <Futured />
    <Hero />
    <Footer />
   
   </div>
  );
}
