import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model"
import Navbar from "./components/Navbar"

import * as Sentry from '@sentry/react';


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Sentry.withProfiler(App);
