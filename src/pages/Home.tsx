import { useState } from "react"

export function Home() {
  const [sistolicAP, setSistolicAP] = useState('')
  const [dialosticAP, setDialosticAP] = useState('')

  function handleAddArterialPression() {
    console.log(sistolicAP, dialosticAP)
  }

  return (
    <>
      <div className="w-full bg-blue-400 h-36 flex justify-center items-center">
        <h2 className="text-white font-medium">Controle diário de pressão arterial</h2>
      </div>
      <div className="flex flex-row justify-around">
        <input
          type="number" 
          placeholder="Pressão sistólica" 
          className="border-2 rounded-md p-2 text-center my-4"
          value={sistolicAP}
          onChange={event => setSistolicAP(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Pressão dialóstica"
          className="border-2 rounded-md p-2 text-center my-4"
          value={dialosticAP}
          onChange={event => setDialosticAP(event.target.value)} 
        />
        <button
          className="text-white bg-green-500 rounded-md my-4 p-2"
          onClick={handleAddArterialPression}
        >
          Adicionar
        </button>
      </div>
      <div className="flex flex-row justify-around">
        <h3
          className="text-white bg-blue-400 rounded-md mt-2 p-2 w-40 text-center"
        >Pressão sistólica</h3>
        <h3
          className="text-white bg-blue-400 rounded-md mt-2 p-2 w-40 text-center"
        >Pressão dialóstica</h3>
        <h3
          className="text-white bg-blue-400 rounded-md mt-2 p-2 w-40 text-center"
        >Data de Auferição</h3>
      </div>
      <div className="flex flex-row justify-around">
        <h3
          className="text-white bg-blue-300 rounded-md mt-2 p-2 w-40 text-center"
        >120</h3>
        <h3
          className="text-white bg-blue-300 rounded-md mt-2 p-2 w-40 text-center"
        >80</h3>
        <h3
          className="text-white bg-blue-300 rounded-md mt-2 p-2 w-40 text-center"
        >02/01/2022</h3>
      </div>
    </>
  )
}