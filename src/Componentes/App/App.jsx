import { useState } from 'react'
import Api from '../API/Api'
import Header from "../Header/Header"
function App() {
  let [nome,setNome] = useState("");
  return (
    <>
    <Header name ={setNome}/>
    <Api name={nome} />
    </>
  )
}

export default App
