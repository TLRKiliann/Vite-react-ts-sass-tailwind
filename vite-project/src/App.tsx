//import { useState } from 'react'
import SimpleBox from './components/SimpleBox'
import reactLogo from './assets/react.svg'
import './App.scss'

const App:React.FC = () => {

  return (
    <div className="App">
      <div>
        <h1 className="text-3xl font-serif font-bold">
          Wellcome !
        </h1>
      </div>
      <div className="please text-center
        font-serif font-bold text-2xl p-3">
        <span>
          Ple
        </span>
        <span>
          ase
        </span>
        <span>
          &nbsp;log
        </span>
        <span>
          in
        </span>
      </div>

      <SimpleBox />

    </div>
  )
}

export default App
