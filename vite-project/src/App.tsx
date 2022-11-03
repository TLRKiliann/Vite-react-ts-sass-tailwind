import React, { useState } from 'react'
import SimpleBox from './components/SimpleBox'
//import reactLogo from './assets/react.svg'
import './App.scss'

const App:React.FC = () => {

  const [name, setName] = useState<string>('');
  const [passwd, setPasswd] = useState<string>('');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const handleChangePasswd = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswd(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("ok! event submitted!")
    console.log(name)
    console.log(passwd)
    setName('')
    setPasswd('')
  };

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

      <SimpleBox
        data-testid="inputRet"
        name={name}
        passwd={passwd}
        handleChangeName={(event) => handleChangeName(event)}
        handleChangePasswd={(event) => handleChangePasswd(event)}
        handleSubmit={handleSubmit}
      />

    </div>
  )
}

export default App
