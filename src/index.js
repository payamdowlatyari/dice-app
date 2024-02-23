import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Navbar from './components/Menu/Navbar'
import Overlay from './components/Overlay'
import { RevealEffectConfig } from 'react-reveal-effect';

createRoot(document.getElementById('root')).render(
  <RevealEffectConfig mountOnBody={false} component='div'
    config={{
      borderGradientSize: 200,
      borderColor: '#ddd'
    }}
  >
    
     <App />
    {/* <Navbar /> */}
    <Overlay />
    </RevealEffectConfig>
)
