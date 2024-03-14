import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import Overlay from './components/Overlay'
import { RevealEffectConfig } from 'react-reveal-effect';
import Intro from './components/Intro'

createRoot(document.getElementById('root')).render(
  <RevealEffectConfig mountOnBody={false} component='div'
    config={{
      borderGradientSize: 200,
      borderColor: '#ddd'
    }}
  >
    
     <App />
    <Intro />

    <Overlay />
    
    </RevealEffectConfig>
)
