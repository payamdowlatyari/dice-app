import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://www.payamd.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        payamd.com
        {" © "}
      {new Date().getFullYear()}
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>hello —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}></div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
