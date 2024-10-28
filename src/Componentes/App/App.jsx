import { useState } from 'react'
import Api from '../API/Api'
function App() {
  let [nome,setNome] = useState(null);
  return (
    <>
    <input type="text" className="border border-current rounded-2xl" onKeyUp={(e) => setNome(e.target.value)}/>
    <Api name={nome} />
    </>
  )
}

export default App
