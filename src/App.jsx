import {useState, useEffect, createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1Bad from './nestedComponentsBad.jsx'
import Component1Good from "./nestedComponentsGood.jsx";
import TitleTextAndImg from "./TitleTextImg.jsx"

function App() {
  const [counter, setCount] = useState(Number(localStorage.getItem("count")))

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(counter))
    }, [counter])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + based + maybe?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {counter}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <TitleTextAndImg
            title='NASA'
            text='some text about NASA'
            img_source="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"/>
        <Component1Good/>
    </>
  )
}

export default App
