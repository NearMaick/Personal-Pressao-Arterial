export function Home() {
  return (
    <>
      <div className="w-full bg-blue-400 h-36 flex justify-center items-center">
        <h2 className="text-white font-medium">Controle diário de pressão arterial</h2>
      </div>
      <div className="flex flex-row justify-around">
        <input
          type="text" 
          placeholder="Pressão sistólica" 
          className="border-2 rounded-md p-2 text-center my-4"
        />
        <input 
          type="text" 
          placeholder="Pressão dialóstica"
          className="border-2 rounded-md p-2 text-center my-4" 
        />
        <button
          className="text-white bg-green-500 rounded-md my-4 p-2"
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