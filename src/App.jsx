import { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import { Preload, ScrollControls, Scroll } from '@react-three/drei'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Portfolio from './components/Pages/Portfolio'
import Contact from './components/Pages/Contact'
import Flag from './components/View/Flag'
import Images from './components/View/Images'
import Items from './components/View/Items'

export default function App() {

  return (

    <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={4}> 
            <Items />
          <Scroll html>
           <Home />
           <About />
           <Portfolio />
           <Contact />
           <Footer/>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
    
  )
}

