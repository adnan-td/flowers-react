import { useState } from 'react'
import Flower from './flower'
import './style.scss'

function App() {
  const [isVis, setIsVis] = useState(false)

  const handleFullscreen = () => {
    setIsVis(true)
    const elem = document.body
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      }
    }
  }

  return (
    <div>
      {isVis ? (
        <Flower />
      ) : (
        <div>
          <button
            className="fullscreen-button"
            onClick={handleFullscreen}
          >
            Go Fullscreen
          </button>
        </div>
      )}
    </div>
  )
}

export default App
